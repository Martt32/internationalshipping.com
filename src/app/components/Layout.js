import Link from "next/link";


const Navbar = ({ children }) => {
    return(
        <main>
            <div className="flex flex-col md:flex-row justify-between p-5 shadow-md">
            {
            //navbar
            }
            <div className="flex justify-center items-center">
            <img style={{ width:80 }} className="rounded-full" src='/large.png'/>
            <p className="font-bold text-2xl text-blue-500">International Shipping</p>
            </div>
            <div className="justify-center items-center space-x-6 flex">
                <Link href='/'>
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