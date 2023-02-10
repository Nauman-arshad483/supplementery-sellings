const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../../../models/User');

router.post('/sign-up', async (req, res) => {
    const { name, email, password, role } = req.body;

    // Simple validation
    if (!name || !email || !password || !role) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    const newUser = new User({
        name,
        email,
        password,
        role
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                res.json({
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                });
            });
        });
    });
});

module.exports = router;