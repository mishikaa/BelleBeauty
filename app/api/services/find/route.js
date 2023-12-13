import {connectToDB} from '@utils/database';
import Service from '@models/service';

export const GET = async(req) => {
    // const {key} = req.json();
    console.log(req)
    // const {keyword} = params;
    
    // console.log("keyword: ",keyword)
    try {
        await connectToDB();
        // const keyword = req.query.keyword
        // console.log(keyword)

        const services = await Service.find({
        name: {
           $regex: new RegExp("a", "i"), // "i" for case-insensitive search
        },
        });
        return new Response(JSON.stringify(services), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all services. Please try again later.", {
            status: 500
        })
    }
}