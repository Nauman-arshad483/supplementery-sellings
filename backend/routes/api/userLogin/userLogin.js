const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../../../models/User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User Does not exist' });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    res.json({
                        
                            userId: user.id,
                            role: user.role,
                        
                    });
                })
        })
})
module.exports = router;