import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (connected) {
        console.log("monogodb already connected");
        return;
    }
    try {
        // const mongouri='mongodb+srv://propertysearchusername:propertysearchpassword@propertysearchcluster.rsvdg.mongodb.net/PropertySearchDB?retryWrites=true&w=majority&appName=PropertySearchCluster'
        const mongouri = process.env.MONGODB_URI
        console.log("mongouri",mongouri)
        if (mongouri) {
            const conn=await mongoose.connect(mongouri);
            console.log(conn.connection.host);
            connected = true
        }
    }
    catch (error) {
        console.log(error)
    }
}

export default connectDB;