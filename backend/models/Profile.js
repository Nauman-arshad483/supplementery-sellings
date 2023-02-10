const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  avatar: {
    profileAvatar: { type: String, required: true }
  },
  personalInformation: {
    companyName: { type: String, required: true },
    nameLastName: { type: String, required: true },
    profleEmail: { type: Date, required: true },
    profilePhone: { type: String, required: false },
  },
  email: {
    emailAddress: { type: String, required: true, unique: true },
    verified: { type: Boolean, required: true },
  },
  password: {
    password: { type: String, required: true },
  },
  linksAndCurrency: {
    currency: { type: String, required: true },
    socialLinks: [
      {
        name: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
  },
  integrations: [
    {
      name: { type: String, required: true },
      enabled: { type: Boolean, required: true },
    },
  ],
});