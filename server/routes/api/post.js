const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const auth = require("../../middleware/auth");

router.post("/createPost", auth, async(req, res) =>{
    const{title, body} = req.body;

    if(!(title && body)){
        return res.status(400).send("Please fill the details properly");
    }

    let post = new Post({
        title,
        body,
        postedBy : req.user.user.id
    });

    await post.save();
    console.log(post)
    console.log("This is user", req.user.user);
    res.status(200).json({post});
});

module.exports = router;

// https://www.youtube.com/watch?v=PRACd1gm8m0&list=PLB97yPrFwo5g0FQr4rqImKa55F_aPiQWk&index=13

// "title": "title 1",
// "body": "This is post",
// "image": "No Photo",
// "postedBy": "61c365a126a8687c50b8eb1f",
// "date": "2021-12-24T16:54:20.122Z",
// "_id": "61c5fb41aab6f731902afbc3",
// "__v": 0

// const token = useSelector<RootState, boolean>(
//     state => state.register.token
// );