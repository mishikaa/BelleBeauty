"use client";

import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
    const [isLoading, setisLoading] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        phone: '',
        first: '',
        last: '',
        message: ''
    }) 

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    };
      
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        
        const serviceId = "service_3je505p";
        const templateId = "template_mo3ed0d";
        const publicKey = "vn39s7HTQs3K1NH9C";

        try {
            setisLoading(true)
            const response = await emailjs.send(serviceId, templateId, formData, publicKey)
  
            if (response) {
              alert('Thanks for contacting us, we will get back to you soon!');
              // Reset the form after submission
              setFormData({
                from: '',
                phone: '',
                first: '',
                last: '',
                message: ''
              });
            }
        } catch (err) {
          console.log(err);
          alert("We can't submit the form, try again later?");
        } finally {
            setisLoading(false)
        }
    };

   return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className='text-4xl w-full text-center uppercase font-bold py-8 bg-gray-800'>Get in touch</h1>

      <form className="flex flex-col justify-center text-[1.3rem] w-[85%] shadow-[0_54px_55px_rgb(78_78_78_/_25%),0_-12px_30px_rgb(78_78_78_/_25%),0_4px_6px_rgb(78_78_78_/_25%),0_12px_13px_rgb(78_78_78_/_25%),0_-3px_5px_rgb(78_78_78_/_25%)] p-[50px] rounded-[10px]">
        <div className="email flex flex-col">
          <label htmlFor="frm-email">Email <span className='required text-red-600 text-2xl'>*</span></label>
          <input
            id="frm-email"
            type="email"
            name="from"
            value={formData.from}
            onChange={handleChange}
            autoComplete="email"
            required
            className="text-[1.2rem] bg-[#e8f0fe] text-black mx-0 my-2.5 p-2.5 rounded-[5px] border-[rgb(31,28,28)];"
          />
        </div>
        <div className="phone flex flex-col">
          <label htmlFor="frm-phone">Phone</label>
          <input
            id="frm-phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="text-[1.2rem] bg-[#e8f0fe] text-black mx-0 my-2.5 p-2.5 rounded-[5px] border-[rgb(31,28,28)]"
          />
        </div>
        <div className="name w-full flex justify-between items-center">
          <div className="flex flex-col w-[30%]">
            <label htmlFor="frm-first">First Name</label>
            <input
              id="frm-first"
              type="text"
              name="first"
              value={formData.first}
              onChange={handleChange}
              autoComplete="given-name"
              required
              className="text-[1.2rem] bg-[#e8f0fe] text-black mx-0 my-2.5 p-2.5 rounded-[5px] border-[rgb(31,28,28)];"
            />
          </div>
          <div className="flex flex-col w-[30%]">
            <label htmlFor="frm-last">Last Name</label>
            <input
              id="frm-last"
              type="text"
              name="last"
              value={formData.last}
              onChange={handleChange}
              autoComplete="family-name"
              required
              className="text-[1.2rem] bg-[#e8f0fe] text-black mx-0 my-2.5 p-2.5 rounded-[5px] border-[rgb(31,28,28)];"
            />
          </div>
        </div>
        <div className="text flex flex-col">
          <label htmlFor="frm-text">Message <span className='required text-red-600 text-2xl'>*</span></label>
          <textarea
            id="frm-text"
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-[#e8f0fe] text-black text-xl mx-0 my-2.5 p-[5px] rounded-[5px] border-[rgb(31,28,28)]"
          ></textarea>
        </div>
        <div className="button flex flex-col justify-center items-center">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled= {isLoading}
            className="text-xl w-[30%] p-2.5 rounded-[5px] border-[3px] border-solid border-[black] hover:bg-[#111317] hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
