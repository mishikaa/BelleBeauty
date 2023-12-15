// ADD  SERVICE OPTION (FOR ADMIN ONLY)
"use client"; 

import { useState } from 'react';
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

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setService(prevData => {
            return {
              ...prevData,
              [name]: value
            }
        })
    } 
    const handleSubmit = async(e: any) => {
        try {
            e.preventDefault();
            setisLoading(true);
            
            if(!session) {
                alert('Please login as admin before adding a new service.')
            }
            else if(!service.name || !service.price) {
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
        <div className='flex flex-col gap-4 justify-center items-center p-4'>
            <h1 className='text-[3rem] uppercase font-extrabold'>Add New Service</h1>
            
            <form className="flex flex-col gap-4 w-full">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Title</label>
                    <input 
                        type="text" 
                        name='name'
                        placeholder='Enter the name of the service'
                        id='name'
                        value={service.name}
                        onChange={handleChange}
                        className='px-4 py-2 rounded outline-none text-black'
                        />
                </div>
                <div className='flex flex-col gap-2'>
                    <textarea 
                        name='description'
                        id='description' 
                        cols={20} 
                        rows={5}
                        value={service.description}
                        onChange={handleChange}
                        placeholder='Describe about the service ..'
                        className='px-4 py-2 rounded outline-none text-black'
                    ></textarea>
                    
                </div>
                <div className='flex gap-2 justify-between items-center'>
                    <section className='flex items-center gap-2'>
                        <label htmlFor="duration">Duration (in minutes)</label>
                        <input 
                            type="number" 
                            name='duration'
                            id='duration'
                            value={service.duration}
                            onChange={handleChange}
                            className='px-4 py-2 rounded outline-none text-black'
                            />
                        </section>
                    <section className='flex items-center gap-2'>
                        <label htmlFor="price">Price (in ₹)</label>
                        <input 
                            type="number"
                            name='price'
                            id='price'
                            value={service.price}
                            onChange={handleChange}
                            className='px-4 py-2 rounded outline-none text-black'
                        />
                    </section>
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
