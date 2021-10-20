import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(" ")[1];

    try {
        // determine custom or OAuth

        const CustomAuth = token.lenght < 500;

        let decodedData;
        if (token && CustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
        }
    } catch (error) {
        console.log(error);
    }
};
