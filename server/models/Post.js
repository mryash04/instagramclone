const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    body : {
        type : String,
        required : true
    },

    image : {
        type : String,
        // default : "No Photo"
    },

    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },

    date : {
        type : Date,
        default : Date.now()
    }
});

module.exports = new mongoose.model("post", postSchema);