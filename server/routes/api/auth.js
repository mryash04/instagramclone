const express = require("express");
const router = express.Router();
const User = require("../../models/Users");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");

router.get("/me", auth, async(req, res) =>{
    const id = req.user.user.id;
    try{
        let user = await User.findById(id).select("-password");

        res.status(200).json(user);
    }catch(err){
        console.log(err.message);
        res.status(400).send("Server Error");
    }
});

router.post("/", async(req, res) =>{
    const{email, password} = req.body;

    console.log(email, password);

    if(!(email && password)){
        return res.status(400).send("Please fill the details properly");
    };

    try{
        let user = await User.findOne({email : email});

        if(!user){
            return res.status(400).send("User doesn't exists");
        };

        const isMatch = await bcrypt.compare(password, user.password)

        if(!(user && isMatch)){
            return res.status(400).send("Inavlid Credential");
        };

        const payload = {
            user : {
                id : user.id
            }
        };

        console.log("This is user data", payload.user.id);

        const token = await jwt.sign(payload, "Yash Agarwal", { expiresIn: 3600000 });

        res.status(200).json({token});
    }catch(err){
        console.log(err.message);
        res.status(400).send("Server Error");
    }
});

module.exports = router;