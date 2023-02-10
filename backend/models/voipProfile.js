const mongoose = require('mongoose');

const VoipProfileSchema = new mongoose.Schema({
    avatar: {
        profileAvatar: { type: String, required: true }
    },
    personalInformation: {
        companyName: { type: String, required: true },
        nameLastName: { type: String, required: true },
        profleEmail: { type: String, required: true },
        profilePhone: { type: String, required: false },
    },
    password: {
        password: { type: String, required: true },
    },
});
module.exports = mongoose.model('voipProfile', VoipProfileSchema);
