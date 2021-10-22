import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        time: {
            startTime: { type: Date, required: true },
            endTime: Date,
        },
        host: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        status: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Pre-hook function fires after doc "update" from db
// eventSchema.pre("update", function (next) {
//     this.model("User").update(
//         { },
//         {"$pull": {}}
//     )
// })

const Event = mongoose.model("Event", eventSchema);

export default Event;
