"use client"; 

import { useEffect, useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AddService = () => {
    const {data: session} = useSession();
    const router = useRouter();
    
    const [service, setService] = useState({
        name: '',
        description: '',
        price: '',
        duration: ''
    })
    const [isLoading, setisLoading] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setService(prevData => {
            return {
              ...prevData,
              [name]: value
            }
        })
    } 
    const handleSubmit = async(e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            e.preventDefault();
            setisLoading(true);
            
            if(!service.name || !service.price) {
                alert('Please add the essential details about the service');
            } else {
                const response = await fetch('api/services/new', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: service.name,
                        description: service.description,
                        duration: service.duration,
                        price: service.price,
                        creator: session?.user?.id,
                    })
                })
                if(response.ok) {
                    router.push('/')
                    alert("Successfully added the new service") 
                }
            }
        } catch (error) {
            console.log("Some error occurred in creating the new service", error)
        } finally {
            setisLoading(false);
        }
    }
   
    return (
        <div className='flex flex-col gap-4 justify-center'>
            <form className="flex flex-col sm:flex-row">
                
                <div className="textInputWrapper">
                    <input 
                        type="text" 
                        name='name'
                        id='name'
                        value={service.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="textInputWrapper">
                    <input 
                        type="text" 
                        name='description'
                        id='description'
                        value={service.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="textInputWrapper">
                    <input 
                        type="number" 
                        name='price'
                        id='price'
                        value={service.price}
                        onChange={handleChange}
                    />
                </div>

                <div className="textInputWrapper">
                    <input 
                        type="number"
                        name='duration'
                        id='duration'
                        value={service.duration}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#113946] font-bold px-8 py-6 text-white rounded-full transition duration-300 ease-in-out hover:bg-[#092635] hover:scale-105  hover:font-extrabold"
            >
               Add Service
            </button>
            </div>
  )
}

export default AddService;
