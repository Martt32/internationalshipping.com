import Link from "next/link";


const Navbar = ({ children }) => {
    return(
        <main>
            <div className="flex justify-between p-5 shadow-md">
            {
            //navbar
            }
            <p className="font-bold text-2xl text-blue-500">Crystal Shipments</p>
            <div className="justify-center items-center space-x-6 hidden md:flex">
                <Link href='/home'>
                <p className="font-bold text-blue-500 hover:grey-300">Home</p>
                </Link>
                <Link href='/services'>
                <p className="font-bold text-blue-500 hover:grey-300">Services</p>
                </Link>
                {/* <Link href='/about'>
                <p className="font-bold text-blue-500 hover:grey-300">About us</p>
                </Link> */}
                <Link href='/contact'>
                <p className="font-bold text-blue-500 hover:grey-300">Contact us</p>
                </Link>
            </div>
            </div>   
            <main className='flex min-h-screen w-full flex-col justify-between'>
                {children}
            </main> 
        </main>
    )
}

export default Navbar