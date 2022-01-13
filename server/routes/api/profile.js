const express = require("express");
const router = express.Router();
const User = require("../../models/Users");
const Post = require("../../models/Post");
const auth = require("../../middleware/auth");

router.get("/userprofile/:id", auth, async(req, res) =>{
    const id = req.params.id;

    console.log("This is id", id);

    try{
        const profile = await User.findById(id).select("-password");

        if(profile){
            const post = await Post.find({postedBy : id}).populate("postedBy", "name _id");

            res.status(200).json({post});
        }
    }catch(err){
        console.log(err.message);
        res.status(400).send("Server Error");
    }
});

module.exports = router;