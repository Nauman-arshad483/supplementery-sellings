const express = require("express");
const mongoose = require("mongoose");
const VoipProfile = require("<path to the schema file>");
const router = express.Router();

router.put("/profile", async (req, res) => {
    // Get the profile updates from the request body
    const updates = req.body;
    
    try {
        // Create a new VoipProfile document with the updates
        const profile = new VoipProfile(updates);

        // Save the profile to the database
        await profile.save();

        // Send the updated profile as a response
        res.json(profile);
    } catch (error) {
        // Handle the error and send a response with the error message
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
