import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

export const signin = async(req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await UserModel.findOne( {email});

        if(!existingUser) return res.statusMessage("lol");

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Wrong password!"})

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({result: existingUser, token});

    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const signup = async(req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

try {
    const existingUser = await UserModel.findOne({ email });

    if(existingUser) return res.status(400).json({ message: "User already exists!"});

    if(password.length < 8 || password.length > 15) return res.status(400).json({ message: "Passwords should contiane 8 to 15 symbols"});

    if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match"});

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign({ email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

    res.status(201).json({ result, token });
} catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
    
}