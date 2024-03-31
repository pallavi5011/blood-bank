const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken') 

const registerController = async (req, res) => {
    try{
        const exisitingUser = await userModel.findOne({email:req.body.email})
        //Validation
        if(exisitingUser){
            return res.status(200).send({
                success:false,
                message:"User Already exists"
            })
        }
        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        //rest data
        const user = new userModel(req.body);
        await user.save();
        return res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user,
        });
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message:"Error in Register API",
            error
        })
    }
};


//LOGIN CONTROLLER

const loginController = async (req, res) => {
    try{
        const user = await userModel.findOne({email: req.body.email})
        if(!user){
            res.status(404).send({
                success: false,
                message: "Invalid Credential"
            })
        }

        //COMPARE PASSWORD
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword){
           return res.status(500).send({
                success: false,
                message: "Invalid Credential"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            token,
            user
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success: false,
            message: " Error In Login API",
            error
        })
    }

}


module.exports = { registerController , loginController};