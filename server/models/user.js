import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true },
        id: { type: String },
    },
    { timestamps: true }
);