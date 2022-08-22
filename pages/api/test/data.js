import { connectToMongo } from "../../../connectMongo";
import Data from "../../../model/dataModel";
import bycript from 'bcryptjs'
export default async function Register (req,res){
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
    try {
        await connectToMongo()
        const test = await Data.create(req.body)
        res.json({test})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}