import mongoose from "mongoose";


const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
         },
    email:{
        type:String,
       required:true,
    } ,
    password:{
     type:String,   
     required:true
    }    
},{timestamps:true})

//  let User= mongoose.model("User",UserSchema) --this one is not worked beacuse we have used named export
export default mongoose.model("User",UserSchema);

// export default User()