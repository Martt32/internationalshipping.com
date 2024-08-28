'use client'
import * as React from 'react'
export default function Pricing(){

    const plans =[
    
        {
          name:'Starter Plan',
          price:500,
          discount:600,
          txt:'Starter Plan for personal use'
        },{
          name:'Basic Plan',
          price:750,
          discount:800,
          txt:'Basic plan for combined use'
          
        },{
          name:'Business Plan',
          price:1000,
          discount:1250,
          txt:'Business Plan'
        },{
          name:'Premium Plan',
          price:2000,
          discount:2500,
          txt:'Premium plan for multiple businesses'
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
        <div className="p-6 flex flex-col justify-center items-center">
            <div className="popup" id="popup-1">
      <div className="overlay">
        <div className="content flex flex-col justify-center items-center p-4 shadow-md bg-white">
        <p className='font-bold text-blue-800 text-4xl'>Transfer</p>
        <p className='font-bold text-blue-800 text-2xl'>Send to</p>
        <div className="flex flex-col space-y-6 p-4 ">

        <p className='font-bold text-blue-800'>Skrill Ltd.</p>
        <p className='font-bold text-blue-800'>Account Number: 40068529</p>
        <p className='font-bold text-blue-800'>Bank: JP Morgan - Gb</p>
        <p className='font-bold text-blue-800'>Reference Number: 267907673</p>

        <p className='font-bold text-red-700 p-5'>Must include reference number listed above</p>
        </div>
        </div>
      </div>
    </div>
            <p className="font-bold text-4xl text-blue-500">
                Pricing
            </p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-8 p-8'>
                {plans.map((plan, index)=> (
                <div key={index} style={{ border:'solid 2px purple' }} className={plan.discount ? 'cursor-pointer p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8' : 'cursor-pointer p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8'}>
                
                <p className="font-bold text-3xl text-blue-700">{plan.name}</p>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <p className="font-bold text-3xl text-blue-600">£{plan.price}</p>   
                    <p className="font-bold text-blue-500">£{plan.price}/month</p>
                    <strike className='text-gray-500'><p className="font-bold text-gray-500">£{plan.discount}/month</p></strike>
                    <p className="font-bold text-gray-500">Limited time special offer</p>
                    <p className="font-bold text-gray-900">{plan.txt}</p>
                    <p onClick={() => setCurrPlan(plan)} className="font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700">Get Started</p>
                </div>
                </div>))}
            </div>
        </div>
    )
}  