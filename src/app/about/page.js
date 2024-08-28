import Link from "next/link"
import * as React from 'react'


export default function Track(){
  

    return(
        <div className="flex flex-col justify-center items-center space-y-5 p-4">
            <p className="font-bold text-4xl text-blue-600">Tracking Code</p>
            <input style={{ border:'solid 1px gray' }} className="p-4 text-blue-700" name='track' type='text' placeholder="Tracking Number"/>
            <Link href='/#pricing'>
                <p className="font-bold bg-blue-500 p-4 px-8 rounded-lg">Submit</p>
            </Link> 
        </div>
    )
}