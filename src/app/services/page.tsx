export default function Service (){
    return(
        <div>
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
        </div>
    )
}