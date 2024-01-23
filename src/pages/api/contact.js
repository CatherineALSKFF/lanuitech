
import dbConnect from '../../../lib/dbConnect';
import ContactForm from '../../../models/contactFormModel';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const contact = new ContactForm(req.body);
      await contact.save();
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error', error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
