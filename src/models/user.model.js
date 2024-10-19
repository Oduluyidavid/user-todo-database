import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        lowerCase:true,
        unique: true,
    },
    isActive:{
        type:String,
        default: true,
    },
    phoneNumber:{
        type:String,
    },
    password:{
        type: String,
        required:true,

    },
    hasSubscribed:{
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true
});
const User = mongoose.model("User", UserSchema);
export default User;
