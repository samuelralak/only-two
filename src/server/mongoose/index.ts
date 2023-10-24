import * as mongoose from "mongoose";

export const mongodbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/onlyTwo'

const dbConnect = async () => mongoose.connect(mongodbURI)
dbConnect().catch(console.error)

export default dbConnect