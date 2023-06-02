import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const Contact = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);

    // Calling lambda function
    try {
      const response = await fetch('https://l45b8db270.execute-api.us-east-1.amazonaws.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Handle the response from the Lambda function
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.error('Error:', error);
    }

    // to reset the form
    reset();

    // to handle success message
    setSuccess(true);
    setTimeout(function() {
      setSuccess(false);
    }, 3000);
  }

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>// Submit the form below to get in touch with me.</p>
          </div>

          {/* Form */}
          <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' {...register("name", {required: true, minLength: 2})} />
          {errors.name && <p className='text-red-500 py-1'>Name is required and must be at least 2 characters long</p>}
          <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' {...register("email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />                                                                                                                  
          {errors.email && <p className='text-red-500 py-1'>Email is required and must be valid</p>}
          <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' rows='10' {...register("message", { required: true })}></textarea>
          {errors.message && <p className='text-red-500 py-1'>Message is required</p>}
          {success && (
            <p className="flex items-center py-1 font-semibold text-green-300">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact