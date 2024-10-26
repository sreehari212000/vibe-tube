import { FaMicrophone } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import YouTubeImg from "../assets/pngwing.com.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-between px-10 pt-2'>
            <div className='flex items-center gap-3'>
                <RxHamburgerMenu size={20} className="cursor-pointer"/>
                <Link to={'/'}> 
                    <img src={YouTubeImg} alt="" className='w-20 cursor-pointer'/>
                </Link>
            </div>

            <div className='flex items-center gap-4'>
                {/* search bar */}
                <div className='border flex items-center justify-between rounded-3xl px-4 w-[500px]'>
                    <input type="text" className='border-none p-2 outline-none w-full'/>
                    <CiSearch size={23} className='cursor-pointer'/>
                </div>
                {/* end of search */}
                <div className='border p-2 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200'>
                    <FaMicrophone size={19}/>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <RiVideoAddLine size={22} className="cursor-pointer"/>
                <IoIosNotificationsOutline size={22} />
                <img src={YouTubeImg} alt="" className='w-9 border rounded-full cursor-pointer p-2'/>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar