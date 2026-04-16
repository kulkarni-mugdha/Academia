import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/lms`, {
            serverSelectionTimeoutMS: 5000
        })
    } catch (error) {
        console.log(`Database connection failed: ${error.message}`)
    }

}

export default connectDB
