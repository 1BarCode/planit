import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

export const signinCtrl = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findone({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist." });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials." });
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong. Cannot sign in.",
        });
    }
};

export const signupCtrl = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    if (!email || !password || !confirmPassword || !firstName || !lastName) {
        return res
            .status(400)
            .json({ message: "Username and password are required." });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: newUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
