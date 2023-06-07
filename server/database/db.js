import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-51lwxuk-shard-00-00.y5mvxlf.mongodb.net:27017,ac-51lwxuk-shard-00-01.y5mvxlf.mongodb.net:27017,ac-51lwxuk-shard-00-02.y5mvxlf.mongodb.net:27017/?ssl=true&replicaSet=atlas-ir9m46-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error);
    }
}

export default Connection;