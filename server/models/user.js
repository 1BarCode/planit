import mongoose from "mongoose";
import { roles } from "../permissions/roles.js";

const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        roles: { type: String, default: roles.USER },
        events: {
            host: [{ type: Schema.Types.ObjectId, ref: "Event" }],
            attendee: [{ type: Schema.Types.ObjectId, ref: "Event" }],
            pending: [{ type: Schema.Types.ObjectId, ref: "Event" }],
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
