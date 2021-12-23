const mongoose = require("mongoose");

const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017/instaclone")
    .then(() => console.log("Connection Successfull"))
    .catch((err) => console.log(err.message));
};

module.exports = connectDB;