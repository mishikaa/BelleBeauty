"use client";

import { useEffect, useState, ChangeEvent } from 'react';
import '@styles/input.css';
import  Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

interface BookDetailsProps {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTimeSlot: string;
  setSelectedTimeSlot: React.Dispatch<React.SetStateAction<string>>;
}

const BookDetails: React.FC<BookDetailsProps> = ({ selectedDate, setSelectedDate, selectedTimeSlot, setSelectedTimeSlot }) => {
  const [minDate, setMinDate] = useState<Date | null>(null);

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
  ];

  const handleTimeSlotChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimeSlot(event.target.value);
  };

  useEffect(() => {
    // Setting the minimum date to the present day
    setMinDate(new Date());
  }, []);

  return (
    <div className='flex flex-col gap-4 justify-center'>
      <form className="flex flex-col sm:flex-row">

        <div className="textInputWrapper">
          <label htmlFor="date" className="block text-md font-semibold mb-2 text-gray-500">Select Date:</label>

          <Datepicker
            inputClassName="textInput"
            useRange={false}
            asSingle={true}
            displayFormat={"DD/MM/YYYY"}
            minDate={minDate}
            value={selectedDate as DateValueType}
            onChange={(selectedDate: any) => setSelectedDate(selectedDate)}
          />
        </div>

        <div className="textInputWrapper">
          <label htmlFor="timeSlot" className="block text-md font-semibold mb-2 text-gray-500">Select Time Slot:</label>
          <select
            id="timeSlot"
            name="timeSlot"
            className="textInput"
            value={selectedTimeSlot}
            onChange={handleTimeSlotChange}
            required
          >
            <option value="" className='rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900' disabled>Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot} className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95 active:bg-emerald-700">{slot}</option>
            ))}
          </select>

        </div>
      </form>
    </div>
  )
}

export default BookDetails;
