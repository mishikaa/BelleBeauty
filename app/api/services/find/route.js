import {connectToDB} from '@utils/database';
import Service from '@models/service';

export const GET = async(req) => {
    const {searchParams} = req.url;
    const {keyword} = searchParams;

    try {
        await connectToDB();

        const services = await Service.find({
            $or: [
                { name: { $regex: new RegExp(keyword, "i") } },
                { description: { $regex: new RegExp(keyword, "i") } },
                { duration: { $regex: new RegExp(keyword, "i") } }, // Assuming duration is also a string
                { price: { $regex: new RegExp(keyword, "i") } }
            ]
        });
        
        return new Response(JSON.stringify(services), {
            status: 200
        })
    } catch (error) {
        console.error(error)
        return new Response("Failed to fetch all services. Please try again later.", {
            status: 500
        })
    }
}