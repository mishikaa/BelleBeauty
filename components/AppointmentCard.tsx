// components/AppointmentCard.tsx
import React from 'react';
// import { Appointment as AppointmentType } from '../types'; // Adjust the path based on your project structure

// interface AppointmentCardProps {
//   appointment: AppointmentType;
// }

const AppointmentCard: React.FC = ({key, appointment, userIsAdmin }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      {userIsAdmin && (
      <p>
        <strong>Customer: </strong> {appointment.customer.email}
      </p>)}
      <p>
        <strong>Date : </strong> {new Date(appointment.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Time Slot : </strong> {appointment.timeSlot}
      </p>
      <p>
        <strong>Selected Services : </strong>
        <ul>
            {appointment.selectedServices.map(service => (
              <li key={service._id} className="mr-2">
                {service.name} {/* Assuming there's a 'name' property on the Service model */}
              </li>
            ))}
        </ul>
      </p>
    </div>
  );
};

export default AppointmentCard;
