const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please add the username"],
    },
    email:{
        type: String,
        required: [true,"Please add the email"],
        unique: [true, "Email Address already taken"],
    },
    password:{
        type: String,
        required: [true,"Please add the user password"],
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("User",UserSchema);