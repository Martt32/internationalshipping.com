'use client'
// import { useEffect, useState } from 'react';

// export default function TrackingPage() {
//   const [trackingData, setTrackingData] = useState(null);s

//   useEffect(() => {
//     async function fetchTrackingData() {
//       try {
//         const carrier = 'usps';
//         const trackingNumber = '9205590164917312751089';
        
//         const response = await fetch(`/api?carrier=${carrier}&trackingNumber=${trackingNumber}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch tracking data');
//         }

//         const data = await response.json();
//         setTrackingData(data);
//         console.log(trackingData)
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchTrackingData();
//   }, []);

//   return (
//     <div>
//       <h1>Tracking Information</h1>
//       {trackingData ? (
//         <pre>{JSON.stringify(trackingData, null, 2)}</pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

import Link from "next/link"
import * as React from 'react'
import { Shippo } from "shippo";
import axios from "axios";

export default function Track(){
  
    const [company, setCompany] = React.useState('')
    const keys =[
      {
        key:"key_NA5HK6RFR1",
        cheque:'£30,000',
        gift:'Jewelry',
        amount:'£5,000',
        address:'48 daneshill Rd, Leicester LE3 6AL, UK',
        skey:'key_I8QN1XU4VU'
      },
      {
        key:"key_7EOPCKGI47",
        cheque:'£30,000',
        gift:'flower vase, magnets (knicKnacks)',
        address:'57 Pica Cottages, Workington, CA14 4QA, UK',
        skey:'key_KIFQD2WJZZ'
      },
      {
        key:"key_8O1Q2AZE51",
        cheque:'$40,000',
        gift:'',
        skey:'key_GC3046CCHZ'
      },
      // "key_GC3046CCHZ",
      // "key_KIFQD2WJZZ",
      // "key_I8QN1XU4VU",
      // "key_9TBNBVP4AS",
      // "key_J12UG9PZQ8",
      // "key_T1V8ZFTWMQ",
      // "key_ZP725C8XGS",
      // "key_JHGQP2O6ZT",
      // "key_7F2781TK89",
      // "key_UOSKSBX0YF",
      // "key_U2UWOVWQNR",
      // "key_P4QZUH5MIM",
      // "key_E0CPFIG5ZR",
      // "key_9WK4IE06PI",
      // "key_T0BAVY11ND",
      // "key_MD6RS8LNP6",
      // "key_RAXM3I3MK5",
      // "key_SFX2EQ53X1",
      // "key_85SXP838V7",
      // "key_I9MTYZ05T",
      // "key_2KW7PWMQE4",
      // "key_WD874Z9I3U"
    ]

    const [input, setInput] = React.useState('');
  const [foundKey, setFoundKey] = React.useState(null);

  const [Kinput, setKInput] = React.useState('');
  const [scannedKey, setScannedKey] = React.useState(null);

  // Function to search for the key
  const findKey = () => {
    const result = keys.find((key) => key.key === input); // Search for exact match
    setFoundKey(result); // Set found key in state

    // track()
  };

  const checkKey = () => {
    // const result = keys.find((key) => key.key === input); // Search for exact match
    setScannedKey(Kinput); // Set found key in state

    // track()
  };


    // const apiToken = 'shippo_live_1aebb824c6516c0d8a0ed2b77b53702c39e2e3f9';
    // const carrierToken = 'fedex_uk';
    // const trackingNumber = 'XXFR-GHFT-57HN-9';
    
    // async function track() {
    //   const url = "https://api.goshippo.com/tracks/";
    
    //   const headers = {
    //     // "Authorization": "ShippoToken shippo_live_1aebb824c6516c0d8a0ed2b77b53702c39e2e3f9",
    //     "Content-Type": "application/json"
    //   };
    
    //   const data = {
    //     "carrier": "usps",
    //     "tracking_number": "9205590164917312751089",
    //     "metadata": "Order 000123"
    //   };
    
    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers: headers,
    //       body: JSON.stringify(data)
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    
    //     const result = await response.json();
    //     console.log(result);
    //   } catch (error) {
    //     console.error("Error fetching shipment tracking data:", error);
    //   }
    // }  
    
    async function track() {
      const url = 'https://api.goshippo.com/tracks/usps/9205590164917312751089';
    
      const headers = {
        'Authorization': ' ShippoToken <shippo_live_1aebb824c6516c0d8a0ed2b77b53702c39e2e3f9>',
      };
    
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error fetching tracking details:', error);
      }
    }
    
    
    

     const popUp = async ()=>{
      const popup = document.querySelector('.popup')
          popup.classList.toggle('active')
      }
      const [finished, setFinished] = React.useState(false)

    return(
        <div className="flex flex-col justify-center items-center space-y-5 p-4">
          <div className="popup" id="popup-1">
      <div className="overlay">
        <div className="content flex flex-col justify-center items-center p-4 shadow-md bg-white space-y-6">
        <p className='font-bold text-blue-800 text-2xl p-3'>Input your tracking pass sent to your email</p>
        <input style={{ border:'solid 1px gray' }} onChange={(e) => setInput(e.target.value)} className="p-4 text-blue-700" name='track' type='text' placeholder={`Tracking pass`}/>
        {foundKey ? (
        <div>
          <p className="font-bold text-green-600">Validated: {foundKey.key}</p>
          <div className="grid grid-cols-2 gap-6 p-4">
            <div className="flex ">
              <img style={{ width:25 }} src='tick.png'/>
              <p className="text-black font-bold">Ordered</p>
            </div>
            
            <div className="flex ">
              <img style={{ width:25 }} src='loading.svg'/>
              <p className="text-black font-bold">Shipped</p>
            </div>
            
            <div className="flex ">
              <img style={{ width:25 }} src='loading.svg'/>
              <p className="text-black font-bold">Moved</p>
            </div>
            
            <div className="flex ">
              <img style={{ width:25 }} src='cancel.png'/>
              <p className="text-black font-bold">Delivered</p>
            </div>
            
          </div>
          <p className="font-bold text-center p-4 text-2xl text-blue-600">Items Ordered</p>
          <p className="font-bold text-green-700">Cheque - {foundKey.cheque}</p>
          {foundKey.gift !== '' && <p className="font-bold text-green-700">Gift - {foundKey.gift} - {foundKey.amount}</p>}
          <p className="font-bold text-gray-500 text-center p-4">Above items are on the way</p>
        </div>
      ) : (
        input && <p className="font-bold text-red-600">Key not found</p> // Show message if no key is found
      )}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-4 md:space-y-0">
          <Link href='/#pricing'>
        <p  className='md:m-0 m-4 font-bold text-white bg-blue-800 p-4 shadow-md cursor-pointer rounded-lg'>Get Tracking pass</p>
          </Link>
          <p className="text-black font-bold">Or</p>
        {foundKey === null ? <p onClick={findKey} className='md:m-0 m-4 text-center font-bold text-white hover:bg-green-600 bg-green-800 p-3 shadow-md cursor-pointer rounded-lg'>Continue</p>
        :
        <p onClick={popUp} className='md:m-0 m-4 text-center font-bold text-white hover:bg-green-600 bg-green-800 p-3 shadow-md cursor-pointer rounded-lg'>Finish</p>}
        </div>
        </div>
      </div>
    </div>
            {!foundKey && 
            <div className="flex flex-col  space-y-5">
            <p className="font-bold text-4xl text-blue-600">Tracking Code</p>
                <input style={{ border:'solid 1px gray' }} className="p-4 text-blue-700" name='track' type='text' placeholder={`${company} Tracking Number`}/>
            <p onClick={popUp} className="font-bold bg-blue-500 cursor-pointer p-4 hover:bg-blue-600 px-8 rounded-lg">Submit</p>
            </div>
            }
            

            {foundKey && 

          <div className="flex flex-col space-y-2 justify-center items-center">
            <p className="font-bold text-3xl text-blue-600">Shipping Information</p>
              <p className="font-bold text-sm text-black">
                Shipment created, ordered to: <span className="text-orange-500">{foundKey.address}</span> 
               </p>

               <input style={{ border:'solid 1px gray' }} onChange={(e) => setKInput(e.target.value)} className="p-4 text-blue-700" name='track' type='text' placeholder={`Tracking pass`}/>
              <img style={{ width:25 }} src='tick.png'/>
               <p className="font-bold text-sm text-black">
                Ordered 
               </p>
               <div className="vertical-line rounded-lg bg-green-700"></div>
               <img style={{ width:25 }} src='tick.png'/>
               <p className="font-bold text-sm text-black">
                shipped
               </p>
               <div className="vertical-line rounded-lg bg-green-700"></div>
               <img style={{ width:25 }} src={`${Kinput === foundKey.skey ? 'tick.png' : 'loading.svg'}`}/>
               <p className={`font-bold text-sm ${Kinput === foundKey.skey ? 'text-green-600' : 'text-gray-500'}`}>
                Scanned 
               </p>
               <div className={`vertical-line rounded-lg ${Kinput === foundKey.skey ? 'bg-green-600' : 'bg-gray-500'}`}></div>
               <img style={{ width:25 }} src='loading.svg'/>
               <p className="font-bold text-sm w-1/2 text-gray-500">
                {foundKey.address} 
               </p> 
            </div>  
              }
        </div>
    )
}