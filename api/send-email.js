module.exports = async (req, res) => {
    // Enable CORS for your github pages domain
    res.setHeader('Access-Control-Allow-Origin', 'https://rahulgavhar.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    const brevoApiKey = process.env.BREVO_API_KEY || "";
    const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL || 'rahulgavharportfolio@gmail.com';
    const receiverEmail = process.env.RECEIVER_EMAIL || 'rahulgavharportfolio@gmail.com';

    if (!brevoApiKey) {
        res.status(500).json({ error: 'Mail server configuration missing (API Key)' });
        return;
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': brevoApiKey,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: {
                    name: name,
                    email: brevoSenderEmail
                },
                to: [
                    {
                        email: receiverEmail,
                        name: 'Rahul Gavhar'
                    }
                ],
                replyTo: {
                    email: email,
                    name: name
                },
                subject: `Portfolio Message: ${subject}`,
                htmlContent: `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <div style="background-color: #7258df; padding: 25px; text-align: center; color: #ffffff;">
                            <h2 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Portfolio Contact</h2>
                            <p style="margin: 8px 0 0 0; font-size: 15px; opacity: 0.9;">You have received a new message from your website</p>
                        </div>
                        <div style="padding: 30px; background-color: #ffffff; color: #333333;">
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 80px;"><strong style="color: #666666; font-size: 14px; text-transform: uppercase;">Name</strong></td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #222222;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #666666; font-size: 14px; text-transform: uppercase;">Email</strong></td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px;"><a href="mailto:${email}" style="color: #7258df; text-decoration: none; font-weight: 500;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #666666; font-size: 14px; text-transform: uppercase;">Subject</strong></td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #222222;">${subject}</td>
                                </tr>
                            </table>
                            <div style="background-color: #f8f9fa; border-left: 4px solid #7258df; padding: 20px; border-radius: 4px;">
                                <p style="margin: 0 0 10px 0; font-size: 13px; color: #888888; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Message</p>
                                <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #444444; white-space: pre-wrap;">${message}</p>
                            </div>
                        </div>
                        <div style="background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 13px; color: #999999; border-top: 1px solid #eaeaea;">
                            This email was automatically generated from your portfolio contact form.
                        </div>
                    </div>
                `
            })
        });

        if (response.ok) {
            const data = await response.json();
            res.status(200).json({ status: 'OK', message: 'Email sent successfully', data });
        } else {
            const errorData = await response.text();
            res.status(response.status).json({ error: `Brevo API error: ${errorData}` });
        }
    } catch (error) {
        res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
};
