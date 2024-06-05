import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.USER_DB
const dbPassword = process.env.PASS

mongoose.set('strictQuery', true); // Defina para true ou false conforme necessário

const connectDB = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.mktocs8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    const connection = mongoose.connection
    connection.on("error", () => {
        console.error("Connection failed")
    })
    connection.on("open", () => {
        console.log("Database connected")
    })
}

connectDB()

export default connectDB;
