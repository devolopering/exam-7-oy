import { Link } from 'react-router-dom'
import { VscCallIncoming } from "react-icons/vsc";
import { PiGlobe } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from 'react-redux';

import GGLogo from '/GG.svg'
import GameGeek from '/GameGeek.svg'
import USA from '/USA_flag.svg'


function Header() {
  const links = ['Categories','Brands','What’s new','Sales','Help', 'About']
  const cartItems = useSelector((state) => state.cart.items);
  


  return (
    <div className='fixed font-inter top-0 right-0 left-0'>
      <div className='bg-[#0D2613]  pt-[19px] pb-[18.25px] px-5'>
       <header className='flex items-center justify-between max-w-[1298px] text-white mx-auto'>
        <div className=' flex items-center gap-8'>
          <Link to='/'><img src={GGLogo} alt="ggLogo" /></Link>
          <div className='flex gap-4 items-center text-sm font-medium '><VscCallIncoming className='text-2xl' />+4904-049-950</div>
        </div>
        <div className='flex items-center gap-6'>
          <p className='text-sm font-medium'>Get 50% Off on the Selected items </p>
          <div className='h-[30px] w-[2px] bg-[#14FF00] '></div>
          <p className='text-sm font-medium '>Shop now</p>
        </div>
        <div className='flex items-center gap-5'>
     <div className='flex items-center text-sm font-medium cursor-pointer gap-3'><MdKeyboardArrowDown className='text-2xl'/> English <img src={USA} alt="usa" /> </div>
          
          <div className='text-white flex items-center text-smfont-medium gap-3 '><PiGlobe className='text-2xl' />Location</div>
        </div>
       </header>
       </div>
       <div className='border-b-2 w-full bg-white'>
       <div className='px-5'>
       <div className='max-w-[1298px] mx-auto flex items-center py-11 justify-between '>
       <Link to='/'><img src={GameGeek} alt="GameGeek" /></Link>
       <nav>
        <ul className='flex gap-10 items-center'>
           {links.map((link, index) => (
            <Link to='#' key={index} className='text-base font-medium' >{link}</Link>
           ))}
        </ul>
       </nav>
       <div className='flex gap-10 items-center'>
        <button><FiSearch className='text-2xl' /></button>
        <button><LuUser className='text-2xl'/></button>
        <Link to='cart'><LuShoppingCart className='text-2xl'/>
        {cartItems.length > 0?  <span className=" absolute transform translate-x-[15px] translate-y-[-25px] bg-red-500 text-white text-[12px] w-full  px-1 py-1 max-w-5 mx-auto h-5 flex items-center justify-center rounded-full">
          {cartItems.length}
        </span> : "" }
        </Link>
       </div>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Header