// BookAppointment.tsx
"use client"; 

import { motion } from 'framer-motion';
import Searchbar from '@/components/Searchbar';
import BookDetails from '@/components/BookDetails';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const BookAppointment: React.FC = () => {
  // FOR SELECTED SEARCH SERVICES
  const [selectedServices, setSelectedServices] = useState([])

  // FOR DATE AND TIME OF THE APPOINTMENT
  const {data: session} = useSession();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState({
      startDate: null,
      endDate: null 
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isLoading, setisLoading] = useState(false)

  // console.log(selectedServices, selectedDate, selectedTimeSlot)
  const user = session?.user.id || null;

  // POST request to send the booking details to database
  const handleSubmit = async(e: any) => {
    try {
      e.preventDefault();
      setisLoading(true);
      
      if(!user) {
        alert("Sign in first to book an appointment!")
      }
      else if(selectedServices.length === 0) {
        alert("Please select atleast 1 service")
      }
      else if(!selectedDate || !selectedTimeSlot) {
        alert('Please select a date and time slot');
      } else {
          const response = await fetch('api/bookAppointment/new', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  customer: user,
                  selectedServices: selectedServices,
                  date: selectedDate,
                  timeSlot: selectedTimeSlot,
              })
          })
          if(response.ok) {
              // router.push('/')
              router.refresh()
              alert("Successfully booked your Appointment") 
          }
      }
    } catch (error) {
        console.log("Some error occurred", error)
    } finally {
        setisLoading(false);
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="p-8 flex flex-col items-center justify-center"
    >
        <h2 className="text-[3rem] uppercase center font-bold mb-4">Select a service</h2>
        <Searchbar selectedServices={selectedServices} setSelectedServices={setSelectedServices}/>
        <BookDetails selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTimeSlot={selectedTimeSlot} setSelectedTimeSlot={setSelectedTimeSlot} />
        
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-[#113946] font-bold px-8 py-6 text-white rounded-full transition duration-300 ease-in-out hover:bg-[#092635] hover:scale-105  hover:font-extrabold"
        >
            Book Appointment
        </button>
     
    </motion.div>
  );
};

export default BookAppointment;
