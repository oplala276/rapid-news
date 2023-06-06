import News from "./model/newsSchema.js";
import { data } from "./constants/data.js";


const DefaultData = async () => {
    try {
        // await News.deleteMany({});
        await News.insertMany(data);
        console.log("Data imported Successfully");
    } catch (error) {
        console.error('Error', error.message);
    }
}

export default DefaultData;