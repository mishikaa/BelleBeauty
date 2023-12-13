"use server";

import {connectToDB} from "@utils/database";
import Appointment from "@models/appointment";

export const ProfileAppointments = async(userId) => {
    await connectToDB();
    // console.log(userId)
    const user = '6575ed10c323e3015755b3e8'   
    let results = await Appointment.find({customer: user}).populate('selectedServices')
    console.log(results);
    return results
}