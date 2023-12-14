import { Schema, model, models } from "mongoose";
import {Service} from "./service";
import {User} from "./user";

const AppointmentSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User should be logged in to book an appointment']
    },
    selectedServices: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Service',
        required: [true, 'Atleast one service should be selected']
    }],
    date: {
        type: Date,
        required: [true, 'Appointment date is required']
    }, 
    timeSlot: {
        type: String,
        required: [true, 'Timeslot is required']
    }
})

const Appointment = models.Appointment || model('Appointment', AppointmentSchema);

export default Appointment;