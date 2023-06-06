
import News from '../model/newsSchema.js';


export const getNews = async (request, response) => {

    try {
        const data = await News.find({});
        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}