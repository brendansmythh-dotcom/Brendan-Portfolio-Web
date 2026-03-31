const RESEND_URL = 'https://api.resend.com/emails'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY' })
  }

  const { message } = req.body ?? {}
  const trimmedMessage = String(message || '').trim()

  if (!trimmedMessage) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    const resendResponse = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['b.smyth1@me.com'],
        subject: 'Website inquiry',
        text: trimmedMessage,
      }),
    })

    const result = await resendResponse.json()

    if (!resendResponse.ok) {
      return res.status(500).json({ error: result?.message || 'Unable to send email' })
    }

    return res.status(200).json({ ok: true, id: result.id })
  } catch (error) {
    return res.status(500).json({ error: 'Unable to send email' })
  }
}
