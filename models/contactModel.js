const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
    {
        user_Id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name:{
            type: String,
            required: [true, "Please add the contact name"],
        },
        email:{
            type: String,
            required: [true, "Please add the contact email"],
        },
        phone:{
            type: String,
            required: [true, "Please add the contact phone no."],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", ContactSchema);