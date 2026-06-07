const DEFAULT_CONTACT_TO_EMAIL = 'baiguettes01@gmail.com';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });
}

function redirectResponse(request, location) {
  return new Response(null, {
    status: 303,
    headers: {
      Location: new URL(location, request.url).toString()
    }
  });
}

function normalize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function buildEmailBody(fields) {
  const lines = [
    'New BAIG Advisory inquiry',
    '',
    `First name: ${fields.firstName}`,
    `Last name: ${fields.lastName}`,
    `Work email: ${fields.email}`,
    `Company / Organization: ${fields.company || '-'}`,
    `Role / Title: ${fields.role || '-'}`,
    `Area of Interest: ${fields.interest}`,
    '',
    'Message:',
    fields.message
  ];

  return lines.join('\n');
}

export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const isJsonRequest = (context.request.headers.get('accept') || '').includes('application/json');

  const fields = {
    firstName: normalize(formData.get('firstName')),
    lastName: normalize(formData.get('lastName')),
    email: normalize(formData.get('email')),
    company: normalize(formData.get('company')),
    role: normalize(formData.get('role')),
    interest: normalize(formData.get('interest')),
    message: normalize(formData.get('message')),
    botField: normalize(formData.get('bot-field'))
  };

  if (fields.botField) {
    return isJsonRequest
      ? jsonResponse({ ok: true })
      : redirectResponse(context.request, '/success/');
  }

  if (!fields.firstName || !fields.lastName || !fields.email || !fields.interest || !fields.message) {
    return isJsonRequest
      ? jsonResponse({ error: 'Please complete all required fields before sending the inquiry.' }, 400)
      : new Response('Missing required form fields.', { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return isJsonRequest
      ? jsonResponse({ error: 'Enter a valid work email address.' }, 400)
      : new Response('Invalid email address.', { status: 400 });
  }

  const resendApiKey = context.env.RESEND_API_KEY;
  const contactFromEmail = context.env.CONTACT_FROM_EMAIL;
  const contactToEmail = context.env.CONTACT_TO_EMAIL || DEFAULT_CONTACT_TO_EMAIL;

  if (!resendApiKey || !contactFromEmail) {
    return isJsonRequest
      ? jsonResponse({ error: 'Contact form email delivery is unavailable.' }, 500)
      : new Response('Contact form email delivery is unavailable.', { status: 500 });
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      from: `BAIG Advisory <${contactFromEmail}>`,
      to: [contactToEmail],
      reply_to: fields.email,
      subject: `New BAIG Advisory inquiry from ${fields.firstName} ${fields.lastName}`,
      text: buildEmailBody(fields)
    })
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    console.error('Resend email request failed', resendResponse.status, resendError);

    return isJsonRequest
      ? jsonResponse({ error: 'The inquiry could not be sent. Please try again.' }, 502)
      : new Response('The inquiry could not be sent.', { status: 502 });
  }

  return isJsonRequest
    ? jsonResponse({ ok: true })
    : redirectResponse(context.request, '/success/');
}
