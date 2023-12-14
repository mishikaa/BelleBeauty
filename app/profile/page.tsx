"use client";

import AppointmentCard from "@/components/AppointmentCard";
import ProfileCard from "@/components/ProfileCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { isAdmin } from "@/utils/isAdmin";

const ProfilePage: React.FC = () => {
    const  {data: session} =  useSession();
    const user = session?.user;
    const userId = user?.id;
    const [appointments, setAppointments] = useState([]);
    const [userIsAdmin, setUserIsAdmin] = useState<Boolean>(false);
    
    useEffect(() => {
        const fetchUserAppointments = async () => {
          try {
            // console.log(userId)
            const response = await fetch(`api/appointments?userId=${userId}`);

            const data = await response.json()

            setAppointments(data);
          } catch (error) {
            console.error('Error fetching appointments:', error);
          }
        };

      const fetchAllAppointments = async () => {
        try {
          // console.log(userId)
          const response = await fetch('api/admin/showAll');
          console.log(response)
          const data = await response.json()

          setAppointments(data);
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
      };
      var userCheck:Boolean;
      if (session) {
        userCheck = isAdmin(userId);
        setUserIsAdmin(userCheck)
      }

      userCheck ? fetchAllAppointments() : fetchUserAppointments();
    }, []);
        
    return (
    <div className="h-full">
        <ProfileCard user={user} count={appointments.length}/>
        <div className="m-8">
            <h2 className="text-2xl font-bold mb-4">{userIsAdmin ? 'All' : 'My'} Appointments</h2>
            {appointments.map(appointment => (
              <AppointmentCard key={appointment._id} userIsAdmin={userIsAdmin} appointment={appointment} />
            ))}
        </div>
    </div>
);
};

export default ProfilePage;
