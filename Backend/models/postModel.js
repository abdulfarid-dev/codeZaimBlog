import mongoose, { model, Schema } from "mongoose";

const postSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required: false
    },
    
    
},{timestamps:true})

const Post=model("Post",postSchema);

export default Post;