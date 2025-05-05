const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../models/user');


const register = async (req, res) => {
    try{
        const { firstname, lastname, age, username, email, phoneNo, country, state, password, role} = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({firstname, lastname, age, username, email, phoneNo, country, state, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: `User is register with ${username}`});

    } catch(err) {
        res.status(500).json({ message: `Something went wrong when registering user`});
    }
}

module.exports = register;