export default function getEmailTemplate(userData) {
    const { userName, userMessage, currentYear } = userData;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    color: #475569;
                }
                .wrapper {
                    background-color: #ffffff;
                    margin: 20px;
                    padding: 20px;
                }
                .header {
                    font-size: 20px;
                    color: #f5a637;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #eeeeee;
                    margin-bottom: 20px;
                }
                .content {
                    line-height: 1.5;
                    font-size: 16px;
                }
                .user-message {
                    font-style: italic;
                }
                .signature {
                    margin-top: 20px;
                }
                .footer {
                    font-size: 14px;
                    border-top: 1px solid #eeeeee;
                    margin-top: 20px;
                    padding-top: 10px;
                }
            </style>
        </head>
        <body>
            <div class="wrapper">
                <div class="header">
                    Confirmation
                </div>
                <div class="content">
                    <p>Hello ${userName},</p>
                    <p>Thank you for contacting us. We are on it, and will get back to you as soon as possible.</p>
                    <p>Your Message:</p>
                    <p class="user-message">${userMessage}</p>
                    <p class="signature">Best wishes,<br>Your Name</p>
                </div>
                <div class="footer">
                    © ${currentYear} Your Domain. All rights reserved.
                </div>
            </div>
        </body>
        </html>
    `;
}
