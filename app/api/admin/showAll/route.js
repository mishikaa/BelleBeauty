import {connectToDB} from '@utils/database';
import Appointment from '@models/appointment';

// GET  REQUEST TO FIND ALL THE APPOINTMENTS MADE(VISIBLE TO ADMIN ONLY)
export const GET = async(req, res) => {
    try {
        await connectToDB();
        
        const appointments = await 
            Appointment.find({})
            .populate({
                path: 'customer',
                select: 'email',
              })
            .populate({
              path: 'selectedServices',
              select: 'name',
            });

            //   console.log(appointments)
        return new Response(JSON.stringify(appointments), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all appointments. Please try again later.", {
            status: 500
        })
    }
}