import { sendEmail } from './mailer.js';

export const handler = async (event) => {
  // based on the API trigger config, handler may recieve an event object,
  // or simply the request body
  let data;
  if (typeof event.body === 'string')
    data = JSON.parse(event.body);
  else
    data = event;

  try {
    const userData = {
      userName: data.user_name,
      userEmail: data.user_email,
      userMessage: data.message,
      currentYear: new Date().getFullYear()
    };
    const response = await sendEmail(userData);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: 'Email sent successfully', response }),
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
