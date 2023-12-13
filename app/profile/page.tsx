"use client";

import AppointmentCard from "@/components/AppointmentCard";
import ProfileCard from "@/components/ProfileCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {ProfileAppointments} from "@components/ProfileAppointments";

const ProfilePage: React.FC = () => {
    const  {data: session} =  useSession();
    const user = session?.user;
    const userId = user?.id;
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
          try {
            console.log(userId)
            const response = await ProfileAppointments(userId);
            // console.log(response)

            setAppointments(response);
          } catch (error) {
            console.error('Error fetching appointments:', error);
          }
        };
    
        fetchAppointments();
    }, []);

    return (
    <div className="h-full">
        <ProfileCard user={user} count={appointments.length}/>
        <div className="m-8">
            <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
            {appointments.map(appointment => (
              <AppointmentCard key={appointment._id} appointment={appointment} />
            ))}
        </div>
    </div>
);
};

export default ProfilePage;
