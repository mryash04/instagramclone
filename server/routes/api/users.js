const express = require("express");
const router = express.Router();
const User = require("../../models/Users");
var bcrypt = require('bcryptjs');

router.get("/", (req, res) =>{
    res.send("This is from home side");
});

router.post("/", async(req, res) =>{
    const{name, email, password} = req.body;

    if(!(name && email && password)){
        return res.status(400).send("Please fill the details properly");
    };

    try{
        let user = await User.findOne({email : email});

        if(user){
            return res.status(400).send("User Already Exists");
        }

        var salt = await bcrypt.genSaltSync(10);
        var hash = await bcrypt.hashSync(password, salt);

        user = new User({
            name : name,
            email : email,
            password : hash
        });

        await user.save();

        res.status(200).json({msg : "User Created Succesfully", user});
    }catch(err){
        console.log(err.message);
        res.status(400).send("Server Error");
    }
});

module.exports = router;