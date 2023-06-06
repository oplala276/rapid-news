import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-vjsnf4d-shard-00-00.9oaioyz.mongodb.net:27017,ac-vjsnf4d-shard-00-01.9oaioyz.mongodb.net:27017,ac-vjsnf4d-shard-00-02.9oaioyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-qde4g5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error);
    }
}

export default Connection;