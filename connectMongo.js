import mongoose from 'mongoose';
console.log(process.env.MONGO_URI)
export const connectToMongo = async()=> mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
