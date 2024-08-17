import React from 'react';
import { Link } from 'react-router-dom';
import Game from '/Game-2.svg';
import Twitter   from "/Twitter.svg";
import Linkedin  from "/Linkedin.svg";
import Facebook  from "/Facebook.svg";
import Instagram from "/Instagram.svg";
import GG from "/GG.svg";
import endLogo from "/endLogo.svg";
import help from "/help.svg";

function Footer() {
  return (
    <div className='bg-[#0D2612] pt-[77px]'>
      <div className='max-w-[1298px] mx-auto'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col items-start gap-7'>
            <Link to="/"><img src={Game} alt="Game" /></Link>
            <div className=' flex flex-col items-start'>
              <span className='bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent font-normal font-hammersmith text-[22px]'>Start your game </span>
              <span className='bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent font-normal font-hammersmith text-[22px]'>With the best</span>
            </div>
          </div>
          <div className='text-white flex items-start gap-[124px]'>
          <ul className='flex flex-col items-start  gap-[19px]'>
              <h3 className='font-bold text-2xl font-inter'>Services</h3>
               <li><Link className='font-normal text-lg font-inter' to="#">Gift Card</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Mobile App</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Shipping & Delivery</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Order Pickup</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Account Signup</Link></li>
            </ul>
            <ul className='flex flex-col items-start  gap-[19px]'>
              <h3 className='font-bold text-2xl font-inter'>Help</h3>
               <li><Link className='font-normal text-lg font-inter' to="#">ShopCart Help</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Returns</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Track Orders</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Contact Us</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Feedback</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Security & Fraud</Link></li>
            </ul>
            <ul className='flex flex-col items-start  gap-[19px]'>
              <h3 className='font-bold text-2xl font-inter'>About Us</h3>
               <li><Link className='font-normal text-lg font-inter' to="#">News & Blog</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Help</Link></li>
               <li><Link className='font-normal text-lg font-inter' to="#">Press Center</Link></li>
            </ul>
          </div>
        </div>
        <div className='mb-14'>
          <ul className='flex items-center justify-start gap-[22px]'>
            <li><Link to="#" ><img src={Twitter} alt="Twitter" /></Link></li>
            <li><Link to="#" ><img src={Linkedin} alt="Linkedin" /></Link></li>
            <li><Link to="#" ><img src={Facebook} alt="facebook" /></Link></li>
            <li><Link to="#" ><img src={Instagram} alt="Instagram" /></Link></li>
          </ul>
        </div>
        <div className='w-full border border-white'></div>
        <div className='max-w-[1217px] text-white mx-auto py-8'>
           <ul className='flex items-center justify-between'>
            <li><Link to="/"><img src={GG} alt="GG" /></Link></li>
            <li><Link to="#" className='flex items-center gap-[18px] text-lg font-inter font-normal'><img src={help} alt="help" />Help Center</Link></li>
            <li><Link to="#" className=' text-lg font-inter font-normal'>Privacy & Policy</Link></li>
            <li><Link to="#" className=' text-lg font-inter font-normal'>Terms of Service</Link></li>
            <li><Link to="#"><img src={endLogo} alt="endLogo" /></Link></li>
           </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
