import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true }, // Marked as required
  lastName: { type: String, required: true },  // Marked as required
  companyName: { type: String, required: true },  // Marked as required
  jobTitle: { type: String, required: true },  // Marked as required
  workEmail: { type: String, required: true },  // Marked as required
  companySize: { type: String, required: true },  // Marked as required
  companyType: { type: String, required: true },  // Marked as required
  message: { type: String, required: true }  // Marked as required
},
{
  timestamps: true
});

export default mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema);
