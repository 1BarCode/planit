import Event from "../models/Event.js";
import User from "../models/User.js";

export const createEvent = async (req, res) => {
    const { title, description, location, startTime, status } = req.body;

    const newEvent = new Event({});

    newEvent.title = title;
    newEvent.description = description;
    newEvent.location = location;
    newEvent.time.startTime = startTime;
    newEvent.status = status;
    newEvent.host = req.userId;

    try {
        const resEvent = await newEvent.save();

        const user = await User.findById(req.userId);
        user.events.host.push(resEvent);
        await user.save();

        res.status(201).json(resEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
