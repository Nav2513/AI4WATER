const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
        console.log(err);
    }
}

const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({username});
        if(!user){
            res.status(404).json({ message: "User does exit!"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.status(400).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.status(200).json({token});


    }catch(err){ 
        res.status(500).json({ message: "Something went wrong while login!"});
    }
}

module.exports = {
    register,
    login,
}