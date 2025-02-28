const express = require('express');
const router = express.Router();
const User = require('../schema/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const authenticateToken = require('../middleware/authenticateToken')

router.post('/register', async (req, res) => {
    try {
        const { email, password, firstname, lastname } = req.body;
        const isEmailExists = await User.findOne({email});

        if(isEmailExists){
            return res.status(400).json({msg: 'Email already exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const userData = await User.create({
            firstname, 
            lastname,
            email,
            password:hashedPassword
        });

        const token = jwt.sign({_id:userData._id},process.env.JWT_SECRET_KEY)

        if(token){
            res.status(200).json({
                token, 
                userData: {
                    userId: userData._id, 
                    email: userData.email,
                },
                msg:'Signup successful'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something went wrong'})
    }
})

router.post('/update', authenticateToken, async (req, res) => {
    try {
        const { firstname, lastname, userId, email, password } = req.body;

        let userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (email && email !== userData.email) {
            const isEmailExists = await User.findOne({ email });
            if (isEmailExists) {
                return res.status(400).json({ msg: 'Email already exists' });
            }
        }

        if (firstname) {
            userData.firstname = firstname;
        }

        if(lastname){
            userData.lastname = lastname;
        }

        if (email) {
            userData.email = email;
        }

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            userData.password = hashedPassword;
        }

        userData = await userData.save();

        const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET_KEY);

        res.status(200).json({
            token,
            userData: {
                userId: userData._id,
                email: userData.email,
            },
            message: 'User data updated successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong' });
    }
});

router.post('/login',async(req,res)=> {
    try {
        const {email,password} = req.body;

        const userExists = await User.findOne({ email })
        
        if(!userExists){
            return res.status(400).json({ msg: "User does not exist" })
        }

        const isMatched = await bcrypt.compare(password,userExists.password)

        if (!isMatched) {
            return res.status(400).json({ msg: "Invalid Credentials" })
        }

        const token = jwt.sign({_id:userExists._id},process.env.JWT_SECRET_KEY)

        if(isMatched && token){
            res.status(200).json({
                token, 
                userData: {
                    userId: userExists._id, 
                    email: userExists.email ,
                },
                msg:'Login successful'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Something went wrong'})
    }
})

module.exports = router;