import {connectToDB} from '@utils/database';
import Appointment from '@models/appointment';

export const GET = async(req, res) => {
    try {
        await connectToDB();
        
        const appointments = await Appointment.find({}).populate('selectedServices');
        return new Response(JSON.stringify(appointments), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all appointments. Please try again later.", {
            status: 500
        })
    }
}