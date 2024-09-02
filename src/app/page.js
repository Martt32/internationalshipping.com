'use client'

import Form from './components/form'
import Pricing from './components/Pricing'
import Link from 'next/link'
import * as React from 'react'

export default function App (){

    const plans =[
    
        {
          name:'Starter',
          price:500,
          min:100,
          length:'5',
          percentage:25,
          discount:false
        },{
          name:'Premium',
          price:2000,
          length:'10 days',
          percentage:35,
          min:500,
          discount:false
          
        },{
          name:'Gold',
          price:5000,
          length:'15 days',
          min:2000,
          percentage:45,
          discount:false
        },{
          name:'Diamond',
          price:10000,
          min:5000,
          length:'20 days',
          percentage:55,
          discount:false
        },
      ]

      const [currPlan, setCurrPlan] = React.useState({})
        const popUp = async ()=>{
        const popup = document.querySelector('.popup')
            popup.classList.toggle('active')
        }
        React.useEffect(()=>{
        if(currPlan.name ){
            popUp()
        }else{
            console.log('no plan selected')
        }
        },[currPlan])
        const [choicePrice, setChoicePrice] = React.useState(currPlan.price)
        const [checking, setChecking] = React.useState(false)
    return(
        <main className="">
            <div className="hero flex justify-between items-center p-4">
                <div className="flex flex-col ">
                <p className="p-2 font-bold text-3xl md:text-8xl md:w-1/2 text-blue-500">Best <span className="text-red-500">Logistics</span> Everywhere</p>
                <p className="p-2 font-bold text-2xl text-blue-900">We are commited to providing our customers with exceptional services</p>
                <div>
                    <Link href='about'>
                <button className=" cursor-pointer hover:bg-blue-400 p-4 text-2xl bg-blue-500 rounded-lg">
                    Track It -&gt;
                </button>
                    </Link>
                </div>
                </div>
                <Link href='/about'>

                <button className="w-auto hidden md:flex cursor-pointer hover:bg-red-400 p-4 text-2xl bg-red-500 rounded-lg">
                    Track It -&gt;
                </button>
                </Link>
            </div>
            <div className="p-20 flex flex-col md:flex-row justify-between">
                <img src='./cargo2.jpg' alt='cargo' className="h-1/2"/>
                <div className="flex flex-col justify-center md:p-2">

                <p className="p-2 font-bold text-3xl md:text-6xl w-1/2 text-blue-500">Company <span className="text-red-500">Overview</span></p>
                <p className="text-gray-500 text-sm md:text-2xl">Crystalshipments is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.Crystalshipments is the world’s driving worldwide coordinations supplier

            Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-blue-900 min-h-50">
                <p className="text-5xl text-red-500 font-bold p-2">Services</p>
                <p className=" p-2 text-2xl text-blue-500 font-bold">Services we provide</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                    <div className="servicet flex flex-col ">
                        <img src='./cargo2.jpg' alt='cargo' className="h-1/2"/>
                        <p className="font-bold text-2xl text-white p-4">Air Freight</p>
                        <p className=" text-white p-4">Swift and secure air freight solutions, ensuring your goods reach their destination in the fastest time possible.</p>
                    </div>
                    <div className="servicet flex flex-col ">
                        <img src='./cargo.webp' alt='cargo' className="h-1/2"/>
                        <p className="font-bold text-2xl text-white p-4">Ocean Freight</p>
                        <p className=" text-white p-4">Reliable ocean freight services, offering cost-effective and comprehensive shipping for all your global needs.</p>
                    </div>
                    <div className="servicet flex flex-col ">
                        <img src='./car.webp' alt='cargo' className="h-1/2"/>
                        <p className="font-bold text-2xl text-white p-4">Road Freight</p>
                        <p className="text-white p-4">Efficient road freight services, delivering your cargo safely and on time across local and regional destinations.</p>
                    </div>
                </div>
            </div>
                <div className="quote p-8 flex flex-col md:flex-row my-10">
                    <div className='p-4'>
                    <p className="font-bold text-6xl p-4 text-blue-500">Cost <span className='text-red-600'>Calculator</span></p>
                    <p className="font-bold p-4">Get instant, accurate delivery quotes with our easy-to-use calculator. Plan your shipment with confidence.</p>
                    </div>
                    <Form/>
                </div>
                <div id='pricing' className='py-10'>

                <Pricing/>
                </div>
                <div className='flex flex-col space-y-10 justify-center items-center p-6 bg-gray-500'>
                    <p className='font-bold text-5xl text-blue-700 flex flex-col justify-center items-center'>Leading delivery service <span className='text-white'>and</span> <span className='text-red-700'>Logistic provider</span></p>
                    <Link href='/about'>
                <button className="w-auto hidden md:flex cursor-pointer hover:bg-red-400 p-4 text-2xl bg-red-500 rounded-lg">
                    Track It -&gt;
                </button>
                    </Link>
                </div>
        </main>
    )
}