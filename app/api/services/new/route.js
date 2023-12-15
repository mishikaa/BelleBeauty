import {connectToDB} from '@utils/database';
import Service from '@models/service';

export const POST = async(req) => {
    const {name, description, duration, price} = await req.json();

    try {
        await connectToDB();
        // Check if created by the owner or not

        const newService = new Service({
            name,
            description,
            duration,
            price
        })
        await newService.save();

        // console.log("new service", newService)
        return new Response(JSON.stringify(newService), {
            status: 201
        })
    } catch (error) {
        return new Response("Failed to add Service. Try again later.", {
            status: 500
        })
    }
}