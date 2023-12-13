import { connectToDB } from '@utils/database';
import Appointment from '@models/appointment';
import { useRouter } from 'next/router';

const fetchAll = async (req, res) => {
  try {
    await connectToDB();

    const router = useRouter();

    const userId = router.query.userId; 
    const appointments = await Appointment.find({ customer: userId }).populate('selectedServices');
    console.log(appointments)
    
    return new Response(JSON.stringify(appointments), {
      status: 200
    });
  } catch (error) {
    return new Response("Failed to fetch appointments. Please try again later.", {
      status: 500
    });
  }
};

export default fetchAll;