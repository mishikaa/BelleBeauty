import mongoose from 'mongoose';

let isConnected = false; // to track the connection

export const connectToDB = async () => {

    if(isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "belleBeauty"
        })

        isConnected = true;

        console.log("MongoDB connected")
    } catch (error) {
        console.error(error);
    }
}