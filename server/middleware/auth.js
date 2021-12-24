const jwt = require("jsonwebtoken");

module.exports = async(req, res, next) =>{
    try {
        const token = req.header("x-auth-token");
        console.log("This is token", token);
        if (!token) return res.status(403).send("Access denied.");

        const decoded = await jwt.verify(token, "Yash Agarwal");
        console.log("This is decoded", decoded);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};