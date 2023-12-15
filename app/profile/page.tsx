"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { isAdmin } from "@/utils/isAdmin";
import AppointmentCard from "@/components/AppointmentCard";
import ProfileCard from "@/components/ProfileCard";

interface Appointment {
  _id: string;
}

interface User {
  id: string;
}

const ProfilePage: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user as User | undefined;
  const userId = user?.id;
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [userIsAdmin, setUserIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const response = await fetch(`api/appointments?userId=${userId}`);
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    const fetchAllAppointments = async () => {
      try {
        const response = await fetch('api/admin/showAll');
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    if (session) {
      const userCheck = isAdmin(userId);
      setUserIsAdmin(userCheck);
    }

    userIsAdmin ? fetchAllAppointments() : fetchUserAppointments();
  }, [userId, session, userIsAdmin]);

  return (
    <div className="h-full">
      <ProfileCard user={user} count={appointments.length} />
      <div className="m-8">
        <h2 className="text-2xl font-bold mb-4">{userIsAdmin ? 'All' : 'My'} Appointments</h2>
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment._id} userIsAdmin={userIsAdmin} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
