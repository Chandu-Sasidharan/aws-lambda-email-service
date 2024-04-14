import { Resend } from 'resend';
import getEmailTemplate from './email-template.js';

// Initialize Resend client
const resend = new Resend('YOUR API KEY');

// Function to send email
async function sendEmail(userData) {
  const htmlContent = getEmailTemplate(userData);
  try {
    const response = await resend.emails.send({
      from: 'hello@your-domain.com',
      to: `${userData.userEmail}`,
      subject: 'Thank you for your message!',
      html: htmlContent
    });
    if (!response.data) throw new Error('No data received from API');
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export { sendEmail };
