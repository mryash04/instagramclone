const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const User = require("../../models/Users");
const auth = require("../../middleware/auth");

// get all post
router.get("/allpost", async (req, res) => {
  try {
    let post = await Post.find().populate("postedBy", "name email");

    res.status(200).json({ post });
  } catch (err) {
    console.log(err.mesaage);
    res.status(400).send("Server Error");
  }
});

//create a post
router.post("/createPost", auth, async (req, res) => {
  const { title, caption } = req.body;
  const { image } = req.body;

  console.log("This is body data", req.body);

  console.log("This is image", image);

  if (!(caption && image)) {
    return res.status(400).send("Please fill the details properly");
  }

  const user = await User.findById(req.user.user.id).select("-password");

  console.log("This is user", user);

  let post = new Post({
    title,
    caption,
    image,
    postedBy: user,
  });

  await post.save();
  console.log("This is user", req.user.user);
  res.status(200).json({ post, success: true });
});

router.post("/upload/file", async (req, res) => {
  const image = req.body;
  console.log("This is image", image);
  console.log("This is body data", req.body);
  try {
    res.status(200).json({ msg: image });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Server Error");
  }
});

//mypost
router.get("/mypost", auth, async (req, res) => {
  console.log("This is my post id", req.user.user.id);
  try {
    let post = await Post.find({ postedBy: req.user.user.id })
      .populate("postedBy", "_id image likes")
      .select("-title -caption");

    // let post = await Post.findById({_id : req.user.user.id});

    res.status(200).json({ post });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Server Error");
  }
});

// get single post by id
router.get("/post/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let post = await Post.findById(id).populate("postedBy", "name email");

    res.status(200).json({ post });
  } catch (err) {
    console.log(err.mesaage);
    res.status(400).send("Server Error");
  }
});

router.put("/like/:id", auth, async (req, res) => {
  console.log("This is like id", req.user.user.id);
  try {
    const like = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { likes: req.user.user.id } },
      { $new: true }
    );
    res.status(200).json({ message: "like", like });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Server Error");
  }
});

router.put("/dislike/:id", auth, async (req, res) => {
  console.log("This is like id", req.user.user.id);
  try {
    const dislike = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $pull: { likes: req.user.user.id } },
      { $new: true }
    );
    res.status(200).json({ message: "like", dislike });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Server Error");
  }
});

router.put("/comments/:id", auth, async (req, res) => {
  console.log("This is comment id", req.user.user.id);
  const { comments } = req.body;
  console.log("This is comments", comments);
  try {
    const comment = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { comments: { text: comments, commentedBy: req.user.user.id } },
      },
      { $new: true }
    ).populate("comments.commentedBy", "name").sort({date:"desc"})
    res.status(200).json({ message: "comment", comment });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("server Error");
  }
});

// delete single post by id
router.delete("/post/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("This is id", id);
    let post = await Post.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "deleted SuccessFully", post });
  } catch (err) {
    console.log(err.mesaage);
    res.status(400).send("Server Error");
  }
});

router.post("/allpost/remove", async (req, res) => {
  try {
    let user = await Post.remove({});

    res.status(200).json({ msg: "All Post Deleted", user });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("server Error");
  }
});

module.exports = router;
