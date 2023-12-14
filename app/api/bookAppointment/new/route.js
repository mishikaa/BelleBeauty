import {connectToDB} from '@utils/database';
import Appointment from '@models/appointment';

export const POST = async(req) => {
    try {
        const {customer, selectedServices, date, timeSlot} = await req.json();
        await connectToDB();

        // console.log(customer, selectedServices, date, timeSlot)
        const newAppointment = new Appointment({
            customer: customer, 
            selectedServices: selectedServices,
            date: date.startDate, 
            timeSlot,
        })
 
        await newAppointment.save();
        return new Response(JSON.stringify(newAppointment), {
            status: 201
        })
    } catch (error) {
        return new Response("Failed to book appointment. Try again later.", {
            status: 500
        })
    }
}