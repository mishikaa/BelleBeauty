// pages/api/sendEmail.js

// import sgMail from '@sendgrid/mail';

export const POST = async(req, res) => {

  const { from, subject, text } = req.body;
//   console.log(req.body)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.ADMIN_EMAIL,
    from: from, 
    subject: subject,
    text: text,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
