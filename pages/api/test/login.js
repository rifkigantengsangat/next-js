import Data from "../../../model/dataModel";
export default async function Login (req,res){
    const {email,password} = req.body
    const user = Data.findOne({email,password})
    if(!user){
        return res.json({status : "User Tidak Di temukan"})
    }else{
        res.redirect('/yamaganteng')
    }

}