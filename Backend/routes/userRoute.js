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
            return res.status(400).json({msg: 'Email already exists', sts: 0})
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
                msg:'Signup successful',
                sts: 1
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something went wrong', sts: 0})
    }
})

router.post('/update-username', authenticateToken, async (req, res) => {
    try {
        const { userId, username, category } = req.body;

        let userData = await User.findById(userId)

        if(!userData){
            return res.status(404).json({msg: 'User not found', sts: 0})
        }

        userData.username = username;
        userData.category = category;

        await userData.save();

        res.status(200).json({
            msg: 'Username created successfully',
            sts: 1
        })
    } catch (error) {
        
    }
})

router.post('/update', authenticateToken, async (req, res) => {
    try {
        const { firstname, lastname, userId, email, password } = req.body;

        let userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ msg: 'User not found', sts: 0 });
        }

        if (email && email !== userData.email) {
            const isEmailExists = await User.findOne({ email });
            if (isEmailExists) {
                return res.status(400).json({ msg: 'Email already exists', sts: 0 });
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
            msg: 'User data updated successfully',
            sts: 1
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong', sts: 0 });
    }
});

router.post('/login',async(req,res)=> {
    try {
        const {email,password} = req.body;

        const userExists = await User.findOne({ email })
        
        if(!userExists){
            return res.status(400).json({ msg: "User does not exist", sts: 0 })
        }

        const isMatched = await bcrypt.compare(password,userExists.password)

        if (!isMatched) {
            return res.status(400).json({ msg: "Invalid Credentials", sts: 0 })
        }

        const token = jwt.sign({_id:userExists._id},process.env.JWT_SECRET_KEY)

        if(isMatched && token){
            res.status(200).json({
                token, 
                userData: {
                    userId: userExists._id, 
                    email: userExists.email,
                },
                msg:'Login successful',
                sts: 1
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Something went wrong', sts: 0})
    }
})

module.exports = router;