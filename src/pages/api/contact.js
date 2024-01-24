import dbConnect from '../../../lib/dbConnect';
import ContactForm from '../../../models/contactFormModel';
import Cors from 'cors';
// import csrf from 'csurf';
import sanitize from 'mongo-sanitize';
import cookieParser from 'cookie-parser';

// Initialize CORS middleware
const corsOptions = {
  methods: ['POST'], // Allowing only POST requests
  // Add other configurations as needed
};




const cors = Cors(corsOptions);



// Initialize CSRF middleware
// Note: Ensure that your application is using cookies or a session
// const csrfProtection = csrf({ cookie: true });

// Helper function to run middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  // Connect to the database
  await dbConnect();

  // Run CORS and CSRF middleware
  await runMiddleware(req, res, cookieParser());

  await runMiddleware(req, res, cors);
  // await runMiddleware(req, res, csrfProtection);

  if (req.method === 'POST') {
    try {
      // Sanitize the input to prevent MongoDB injection
      const sanitizedBody = sanitize(req.body);

      // Create and save the contact form entry
      const contact = new ContactForm(sanitizedBody);
      await contact.save();

      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error', error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
