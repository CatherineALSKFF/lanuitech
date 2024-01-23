import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  jobTitle: String,
  workEmail: String,
  companySize: String,
  companyType: String,
  message: String,
},
{
    timestamps: true
});

export default mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema);
