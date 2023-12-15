// components/AppointmentCard.tsx
interface Customer {
  email: string;
}

interface Service {
  _id: string;
  name: string;
}

interface Appointment {
  _id: string;
  customer: Customer;
  date: string; 
  timeSlot: string;
  selectedServices: Service[];
}

interface AppointmentCardProps {
  key: string;
  appointment: Appointment;
  userIsAdmin: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({key, appointment, userIsAdmin }) => {
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
            {appointment.selectedServices.map((service) => (
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
