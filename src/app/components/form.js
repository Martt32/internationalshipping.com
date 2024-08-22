export default function Form(){
    return(
        <div className="bg-white p-8">
           <p className="font-bold md:text-2xl text-blue-900">
                Personal and Shipment data   
            </p>     
            <form className="grid grid-cols-2 gap-4 p-6">
                <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='fullname' type="text" placeholder="Full Name"/>
                <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='email' type="email" placeholder="Email"/>
                <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='phone' type="text" placeholder="Phone"/>
                <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='subject' type="text" placeholder="Subject"/>
                <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='delivercity' type="text" placeholder="Delivery City"/>
                <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='citydepart' type="text" placeholder="City of Departure"/>
               <select style={{ border:'1px solid gray' }} className='p-2 text-black' >
                    <option value="Palm">Freight Type</option>
                    <option value="Pine">Air Freight</option>
                    <option value="Oak">Ocean Freight</option>
                    <option value="Palm">Road Freight</option>
                </select>
            </form>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='subject' type="number" placeholder="Weight"/>
            <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='subject' type="number" placeholder="Height"/>
            <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='subject' type="number" placeholder="Width"/>
            <input style={{ border:'1px solid gray' }} className="p-2 text-blue-500" name='subject' type="number" placeholder="Length"/> 

            <label className="flex space-x-2 cursor-pointer">
            <input style={{ }} className="cursor-pointer" name='fragile' type="checkbox" />
                <p className="text-black">Fragile</p>
            </label>
            <label className="flex space-x-2 cursor-pointer">
            <input style={{ }} className="cursor-pointer" name='fragile' type="checkbox" />
                <p className="text-black">Express Delivery</p>
            </label>
            <label className="flex space-x-2 cursor-pointer">
            <input style={{ }} className="cursor-pointer" name='fragile' type="checkbox" />
                <p className="text-black">Insurance</p>
            </label> 
            <label className="flex space-x-2 cursor-pointer">
            <input style={{ }} className="cursor-pointer" name='fragile' type="checkbox" />
                <p className="text-black">Packaging</p>
            </label>  
            <button className="bg-blue-800 p-3 rounded-lg font-bold hover:bg-blue-600">Submit</button>
            </div>
        </div>
    )
}