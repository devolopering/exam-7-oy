import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowDropup } from "react-icons/io";

import { saveBrands, setBrandError, setBrandLoading } from '../../store/brandSlice'
import { saveColors, setColorError, setColorLoading } from '../../store/colorSlice'

const Aside = ({ setSelectedBrand, setSelectedColor, selectedBrand, selectedColor }) => {
  const dispatch = useDispatch()
  const { brands, brandLoading, brandError } = useSelector((state) => state.brands);
  const { colors, colorLoading, colorError } = useSelector((state) => state.colors);
  const conectiv = ['2.4 GHz wireless technology', '3.5mm audio input', 'Bluetooth', 'LIGHTSPEED wireless technology', 'Wired USB input', 'USB-C'];
  const [showBrand, setShowBrand] = useState(true)
  const [showConect, setShowConect] = useState(true)
  const [showColor, setShowColor] = useState(true)
  const [selectedConect, setSelectedConect] = useState(""); 

  useEffect(() => {
    async function fetchColors() {
      dispatch(setColorLoading(true))
      try {
        const response = await fetch("https://headphones-server.onrender.com/colors")
        if (!response.ok) {
          throw new Error("Error fetching colors")
        }
        const data = await response.json()
        dispatch(saveColors(data))
      } catch (error) {
        dispatch(setColorError(error.message))
      } finally {
        dispatch(setColorLoading(false))
      }
    }
    fetchColors()
  }, [dispatch])

  useEffect(() => {
    async function fetchBrands() {
      dispatch(setBrandLoading(true))
      try {
        const response = await fetch("https://headphones-server.onrender.com/brands")
        if (!response.ok) {
          throw new Error("Error fetching brands")
        }
        const data = await response.json()
        dispatch(saveBrands(data))
      } catch (error) {
        dispatch(setBrandError(error.message))
      } finally {
        dispatch(setBrandLoading(false))
      }
    }
    fetchBrands()
  }, [dispatch])

  
  const reset = () =>{
    setSelectedColor(""),
    setSelectedBrand(""),
    setSelectedConect("")
    }

  return (
    <div className='w-[250px]'>
      <div>
        <div className='w-full border border-[#454444] border-dashed mb-6'></div>
        <h1 className='font-normal font-hammersmith text-xl mb-2 flex items-center justify-between'>
          BRAND 
          <IoMdArrowDropup 
           onClick={() => setShowBrand(!showBrand)} 
           className={`text-[#0BA42D] cursor-pointer text-3xl transition-transform duration-500 ${showBrand === false ? 'rotate-180' : ''}`} 
      />
    </h1>
       {showBrand && <div className="flex flex-wrap flex-col">
          <ul className="flex items-start mt-5 flex-col">
            {brandLoading && <p>Brand Loading...</p>}
            {brandError && <p className='text-red-600'>{brandError}</p>}
            {brands.map((brand, index) => (
              <li key={index} className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id={brand}
                  name={"brand"}
                  onChange={() => setSelectedBrand(brand)}
                  checked={selectedBrand === brand}
                  className='mr-4 cursor-pointer checked:border-[#0BA42D] border-2 w-5 h-5'
                />
                <label htmlFor={brand} className='cursor-pointer font-light text-lg font-readex'>{brand}</label>
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <div className='w-full border border-[#454444] border-dashed mb-6 mt-6'></div>
      <div>
        <h1 className='font-bold mb-2 flex items-center justify-between '>CONNECTIVITY <IoMdArrowDropup onClick={() => setShowConect(!showConect)} 
           className={`text-[#0BA42D] cursor-pointer text-3xl transition-transform duration-500 ${showConect === false ? 'rotate-180' : ''}`} /></h1>
      {showConect && <ul className="flex items-start  mt-5 flex-col">
       {conectiv.map((conect, index) => (
          <li key={index} className="flex items-center mb-2"> 
       <input
        type="checkbox"
        id={`conect-${index}`}
        name={`conect-${index}`}
        checked={selectedConect === conect}
        onChange={() => setSelectedConect(conect)}
        className="mr-4 cursor-pointer checked:border-[#0BA42D] checked:bg-[#0BA42D] w-5 h-5 border flex-shrink-0" 
      />
      <label
        htmlFor={`conect-${index}`}
        className="cursor-pointer font-light text-lg font-readex w-full" 
      >
        {conect}
      </label>
    </li>
  ))}
</ul>}


        </div>
      <div className='w-full border border-[#454444] border-dashed mt-6 mb-6'></div>
      <div>
        <h1 className='font-bold mb-2 flex items-center justify-between'>COLORS <IoMdArrowDropup onClick={() => setShowColor(!showColor)} className={`text-[#0BA42D] cursor-pointer text-3xl transition-transform duration-500 ${showColor === false ? 'rotate-180' : ''}`}/></h1>
        {showColor && <ul className='flex flex-wrap mt-5'>
          {colorLoading && <p>Color Loading...</p>}
          {colorError && <p className='text-red-600'>{colorError}</p>}
          {colors.map((color, index) => (
            <li key={index} className='flex gap-3'>
              <button
                onClick={() => setSelectedColor(color)}
                className={`w-[20px] h-[20px] border border-slate-700 rounded-full cursor-pointer mr-2 mb-2 ${selectedColor === color ? 'outline outline-2 outline-blue-600' : ''}`}
                style={{ backgroundColor: color }}
              ></button>
            </li>
          ))}
        </ul>}
      </div>
      <div className='w-full border border-[#454444] border-dashed mt-6 mb-6'></div>
      <button onClick={() => reset() } className='bg-blue-600 text-white px-4 py-1 mt-4 font-semibold'>Reset</button>
    </div>
  )
}

export default Aside
