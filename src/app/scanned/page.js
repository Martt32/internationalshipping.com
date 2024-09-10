'use client'
import * as React from 'react'

export default function Track(){

    const [email, setEmail] = React.useState('')
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
          
          const send = await emailjs.send("service_h2tknaj","template_406q2to",{
            message: "Request has been received and your payment is being processed ",
            to_email: email,
            },'JM0wwXNltlk79MS5V');
            alert('A confirmation email has been sent to you.')
            console.log(send)
            popUp()
        } catch (error) {
          alert('Somethings went wrong')
        }
        }
return(
<div className="content flex flex-col justify-center items-center p-4 shadow-md bg-white">
        <p className='font-bold text-blue-800 text-4xl'>Transfer</p>
        <p className='font-bold text-blue-800 text-2xl'>Send £500 to</p>
        <div className="flex flex-col space-y-6 p-4 ">

        <p className='font-bold text-blue-800'>Skrill Ltd.</p>
        <p className='font-bold text-blue-800'>Account Number: 40068529</p>
        <p className='font-bold text-blue-800'>Bank: JP Morgan - Gb</p>
        <p className='font-bold text-blue-800'>Reference Number: 267907673</p>

        <p className='font-bold text-red-700 p-5'>Must include reference number listed above</p>
        </div>
        <input onChange={(e)=> setEmail(e.target.value)} style={{ border:'solid 1px gray' }} className='p-4 text-black' name='email' type='email' placeholder='Email'/>
        <p className='font-bold text-blue-800 p-4'>A confirmation email will be sent to you</p>
        <p onClick={handleSubmit} className='font-bold text-white bg-blue-800 p-4 shadow-md cursor-pointer'>I have made the deposit</p>
        </div>
)
}