export default function Pricing(){
    return(
        <div className="p-6 flex flex-col justify-center items-center">
            <p className="font-bold text-4xl text-blue-500">
                Pricing
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div style={{ border:'solid 2px purple' }} className="p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8">
                <p className="font-bold text-3xl text-blue-700">Starter plan</p>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <p className="font-bold text-3xl text-blue-600">£500.00</p>   
                    <p className="font-bold text-blue-500">£500.00/month</p>
                    <strike className='text-gray-500'><p className="font-bold text-gray-500">£600.00/month</p></strike>
                    <p className="font-bold text-gray-500">Limited time special offer</p>
                    <p className="font-bold text-gray-900">Starter plan for personal use</p>
                    <p className="font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700">Get Started</p>
                </div>
                </div>


                <div style={{ border:'solid 2px purple' }} className="p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8">
                <p className="font-bold text-3xl text-blue-700">Basic Plan</p>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <p className="font-bold text-3xl text-blue-600">£750.00</p>   
                    <p className="font-bold text-blue-500">£750.00/month</p>
                    <strike className='text-gray-500'><p className="font-bold text-gray-500">£800.00/month</p></strike>
                    <p className="font-bold text-gray-500">Limited time special offer</p>
                    <p className="font-bold text-gray-900">Basic plan for combined use</p>
                    <p className="font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700">Get Started</p>
                </div>
                </div>

                <div style={{ border:'solid 2px purple' }} className="p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8">
                <p className="font-bold text-3xl text-blue-700">Business plan</p>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <p className="font-bold text-3xl text-blue-600">£1000.00</p>   
                    <p className="font-bold text-blue-500">£1000.00/month</p>
                    <strike className='text-gray-500'><p className="font-bold text-gray-500">£1250.00/month</p></strike>
                    <p className="font-bold text-gray-500">Limited time special offer</p>
                    <p className="font-bold text-gray-900">Business Plan</p>
                    <p className="font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700">Get Started</p>
                </div>
                </div>

                <div style={{ border:'solid 2px purple' }} className="p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8">
                <p className="font-bold text-3xl text-blue-700">Premium plan</p>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <p className="font-bold text-3xl text-blue-600">£2000.00</p>   
                    <p className="font-bold text-blue-500">£2000.00/month</p>
                    <strike className='text-gray-500'><p className="font-bold text-gray-500">£2500.00/month</p></strike>
                    <p className="font-bold text-gray-500">Limited time special offer</p>
                    <p className="font-bold text-gray-900">Premium Plan for multiple businesses</p>
                    <p className="font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700">Get Started</p>
                </div>
                </div>
            </div>
        </div>
    )
}  