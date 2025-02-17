import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first_name, last_name, phone, email, location, service, other_service, accommodations } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "your-smtp-host",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Your Company" <from@example.com>',
        to: "your-email@example.com",
        subject: "New Contact Form Submission",
        text: `
          Name: ${first_name} ${last_name}
          Phone: ${phone}
          Email: ${email}
          Location: ${location}
          Service: ${service}
          ${service === 'Other' ? `Other Service: ${other_service}` : ''}
          Accommodations: ${accommodations}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${first_name} ${last_name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Service:</strong> ${service}</p>
          ${service === 'Other' ? `<p><strong>Other Service:</strong> ${other_service}</p>` : ''}
          <p><strong>Accommodations:</strong> ${accommodations}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
