import {useState} from 'react';
import Hero from './Hero';
import Filter from './Filter';
import Products from './Products';
import Aside from './Aside';
import { Outlet } from 'react-router-dom';

function Home({sortBy, setSortBy}) {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div className="mt-[180px]   border">
      <Hero/>
      <Filter setSortBy={setSortBy} sortBy={sortBy}/>

      <div className="flex flex-col max-w-[1298px] px-5 mx-auto lg:flex-row gap-[10px]">
      <div className="p-[10px] min-w-[300px]  w-full lg:w-auto">
        <Aside 
           setSelectedBrand={setSelectedBrand}
           setSelectedColor={setSelectedColor}
           selectedBrand={selectedBrand}
           selectedColor={selectedColor}
        />
      </div>
      <div className="p-[10px] w-full ">
        <Products
            selectedBrand={selectedBrand}
            selectedColor={selectedColor}
            sortBy={sortBy} 
        />
      </div>
    
    </div>
    <div className='flex items-center mt-24 mb-20  justify-center gap-5'>
        <button className='border-2 rounded-full flex items-center hover:bg-[#0BA42D] hover:text-white duration-500 justify-center p-1 w-6 h-6 border-[#0BA42D] text-[#0D2612]'>1</button>
        <button className='border-2 rounded-full flex items-center hover:bg-[#0BA42D] hover:text-white duration-500 justify-center p-1 w-6 h-6 border-[#0BA42D] text-[#0D2612]'>2</button>
        <button className='border-2 rounded-full flex items-center hover:bg-[#0BA42D] hover:text-white duration-500 justify-center p-1 w-6 h-6 border-[#0BA42D] text-[#0D2612]'>3</button>
       </div>
    <div>
      <Outlet/>
    </div>
    </div>
  );
}

export default Home;
