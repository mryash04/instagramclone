const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title : {
        type : String,
    },

    caption : {
        type : String,
        required : true
    },

    image : {
        type : String,
        // default : "No Photo"
    },

    likes : [{type : mongoose.Schema.Types.ObjectId, ref : "user"}],

    comments : [{
        text : {
            type : String,
        },
        date : {
            type : Date,
            default : Date.now
        },
        commentedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        }
    }],

    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },

    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = new mongoose.model("post", postSchema);