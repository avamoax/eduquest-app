import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_fna4ynd';
const TEMPLATE_ID = 'template_gudoig6';
const PUBLIC_KEY = '2XGZdaqOWt_UVvWxt';

export const sendWelcomeEmail = async (userEmail: string, userName: string): Promise<void> => {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: userEmail,
        to_name: userName,
        app_url: 'https://eduquest-app-three.vercel.app',
      },
      PUBLIC_KEY
    );
    console.log('Welcome email sent to', userEmail);
  } catch (error) {
    console.log('Email sending failed:', error);
  }
};