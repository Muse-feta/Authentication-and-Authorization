const userModel = require('../models/userModel')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");
app.use(cookieParser());




const registerController = async (req, res) => {
    const {username, email, password} = req.body
    const hashPassword = await bcrypt.hash(password, 10);

    try {
        userModel.create({ username, email, password:hashPassword });
        res.status(201).json({message: "account craeted susscfully"})
    } catch (error) {
        res.status(500).json({err})
    }
};

const loginController = async (req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email})

    
    try {
        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword) {
            return res.status(500).json({message: 'invalid password'})
        }
        else{
            const token = jwt.sign(
              { email: user.email, role: user.role },
              "This_Is_My_Secret_Key",
              {expiresIn: '5m'}
            );
            res.cookie('token', token)
            return res.status(200).json({
                status: true,
                role: user.role
            });
        }
    } catch (error) {
        return res.status(500).json({error})
    }
};

const dashController = (req, res) => {
    res.status(200).json({status: true})
};
    


module.exports = { loginController, registerController, dashController };