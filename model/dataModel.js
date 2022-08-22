import { Schema,model,models } from "mongoose";

const dataSchema = new Schema({
    name : String,
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password : { 
        type : String,
        required : true,
       
         
    },

});
dataSchema.set("timestamps",true)
const Data = models.nextjs || model("nextjs",dataSchema)
export default Data