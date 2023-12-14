import {connectToDB} from '@utils/database';
import Appointment from '@models/appointment';

export const GET = async(req, res) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  // console.log(userId);
  
  try {
    await connectToDB();
    
    const appointments = await 
      Appointment.find({customer: userId})
      .populate({
        path: 'selectedServices',
        select: 'name',
      });

      return new Response(JSON.stringify(appointments), {
      status: 200
  })
  } catch (error) {
      return new Response("Failed to fetch all appointments. Please try again later.", {
          status: 500
      })
  }
}