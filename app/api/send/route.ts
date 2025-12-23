import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Portfolio Contact</title>
        </head>
        <body style="
          margin: 0;
          padding: 0;
          background-color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          color: #000000;
        ">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding: 40px 16px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="
                  max-width: 600px;
                  border: 1px solid #000;
                  padding: 32px;
                ">

                  <!-- Header -->
                  <tr>
                    <td style="
                      font-size: 18px;
                      font-weight: bold;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      border-bottom: 1px solid #000;
                      padding-bottom: 16px;
                    ">
                      New Portfolio Contact
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding-top: 24px; font-size: 14px; line-height: 1.6;">
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>

                      <p style="margin-top: 24px;">
                        <strong>Message:</strong>
                      </p>

                      <p style="
                        border-left: 3px solid #000;
                        padding-left: 16px;
                        margin-top: 12px;
                        white-space: pre-line;
                      ">
                        ${message}
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="
                      border-top: 1px solid #000;
                      margin-top: 32px;
                      padding-top: 16px;
                      font-size: 12px;
                      color: #555;
                    ">
                      Sent from your portfolio contact form
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "hello@example.com",
      replyTo: email,
      subject: `📩 New Portfolio Inquiry — ${name}`,
      html: htmlTemplate,
    })

    return Response.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
