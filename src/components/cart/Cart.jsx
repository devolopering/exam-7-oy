import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem } from '../../store/cartSlice';
import { MdClose } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const navigate = useNavigate()
  const handleIncrease = (id) => {
    dispatch(updateCartItem({ id, type: 'increase' }));
  };
 
  const handleDecrease = (id) => {
    dispatch(updateCartItem({ id, type: 'decrease' }));
  };

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const confirmRemoveItem = () => {
    dispatch(updateCartItem({ id: selectedItemId, type: 'remove' })); 
    setShowModal(false);
    setSelectedItemId(null);
  };

  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div className="mt-[220px] mb-10 max-w-[1298px] mx-auto">
      <button onClick={() => navigate(-1)} className='flex  items-center mb-10 gap-2 text-lg font-readex font-semibold'>
        <IoIosArrowRoundBack className='text-4xl'/> Back to Shopping
      </button>
      <h2 className='text-[32px] ml-10 font-hammersmith font-normal text-[#0D2612] '>SHOPPING CART</h2>
      <div>
        <h2 className="text-3xl text-white font-semibold">Your Cart</h2>
      </div>
      <div className="max-w-full">
        {cartItems.length === 0 ? (
          <div className="text-center flex flex-col gap-5 py-10">
            <p className="font-bold text-4xl">Your cart is empty :)</p>
          </div>
        ) : (
          <div>
            <div className='flex items-start gap-3 max-[1298px] mx-auto justify-between'>
              <div className=' pr-3  w-full overflow-y-auto h-[80vh] scrollbar-hide'>
              <div className="px-5 border-r-2  mr-auto border-[#ccc] w-full">
                <div className='w-full border ] mr-auto border-[#454444] border-dashed'></div>
                <div className='w-full flex items-center justify-between mb-2 mt-3   mr-auto'>
                  <h3 className="font-hammersmith  text-[#0D2612] font-normal text-[22px] text-center ml-14">Product</h3>
                  <div className='flex items-center w-2/5 gap-40'>
                    <h3 className="font-hammersmith  text-[#0D2612] font-normal text-center text-[22px]">Quantity</h3>
                    <h3 className=" font-hammersmith text-[#0D2612] font-normal text-center text-[22px]">Price</h3>
                  </div>
                </div>
                <div className='flex flex-col w-full  items-start justify-center'>
                  {cartItems.map((item, index) => (
                    <div key={index} className='w-full'>
                      <div className='w-full border border-[#454444] border-dashed'></div>
                      <div className='px-2 py-5 flex items-start justify-start gap-5'>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="font-semibold">
                          <MdClose className='text-3xl text-[#0D2612] rounded'/>
                        </button>
                        <div className="flex items-start justify-between w-full gap-6">
                          <div className='flex items-start justify-center gap-5'>
                          <div className='w-[155px] h-[155px] px-6 py-5 border flex items-center justify-center'>
                            <img src={item.image_url} alt={item.name} className="w-full h-28 object-cover" />
                          </div>
                          <div className='flex flex-col items-start justify-center'>
                            <h3 className="font-semibold text-left font-hammersmith text-xl mb-1">{item.name}</h3>
                            <p className='mb-5 font-light text-lg font-readex'>{item.brand_name}</p>
                            <ul className="flex items-center gap-2 mb-3">
                              {item.color_options.map((color, index) => (
                                <li
                                  key={index}
                                  style={{ background: color }}
                                  className="border w-5 h-5 border-black rounded-full"
                                ></li>
                              ))}
                            </ul>
                            <p className='font-readex font-light text-base text-[#0BA42D]'>In stock</p>
                          </div>
                          </div>
                          <div className='flex bg-[#F5F5F5] items-center w-32 justify-between rounded-full p-3'>
                            <button
                              onClick={() => handleDecrease(item.id)}
                              disabled={item.quantity === 1}
                            >
                              <FaMinus className='text-xl'/>
                            </button>
                            <span className="font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => handleIncrease(item.id)}
                            >
                              <FaPlus className='text-xl'/>
                            </button>
                          </div>
                          <h3 className=" text-[#0D2612] font-bold font-readex text-center">${item.totalPrice}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='w-full border border-[#454444] border-dashed mb-5'></div>
                </div>
              </div>
              <div className='mb-20 mt-[76px]  max-w-[460px] ml-20 '>
                <p className='text-lg font-inter font-light '>Have a coupon/promotional code? Enter your code</p>
                <form onSubmit={(e) => e.preventDefault()} className='flex items-start gap-5 w-full justify-between mt-5'>
                  <input type="text" required className='border-b-2 border-[#ccc] outline-none w-3/4 mt-5 pb-4' />
                  <button type='submit' className='border-[#0BA42D] text-lg font-bold font-inter text-[#0BA42D] border-2 py-2 px-[26px] rounded-[10px] duration-300 hover:bg-[#0BA42D] hover:text-white'>
                  APPLY
                  </button>
                 </form>
          </div>
              </div>
              <div className='w-2/6'>
                 <h2 className='text-[#0D2612] text-[32px] font-hammersmith font-normal'>CART TOTALS</h2>
                 <div className='w-full border border-[#454444] border-dashed mb-5'></div>
                 <div className='flex items-center justify-between mb-5'><p className='font-readex font-light text-[#190D26]'>Shipping (3-5 Business Days)</p> <h4 className='font-readex text-lg font-medium'>Free</h4></div>
                 <div className='flex items-start justify-between gap-2 mb-5'><p className='font-readex font-light text-[#190D26]'>TAX (estimated for the United States (US))</p><h4 className='font-readex text-lg font-medium' >$0</h4></div>
                 <div className='flex items-center justify-between'><p className='font-readex font-light text-[#190D26]'>Subtotal</p><h4 className='font-readex text-lg font-medium'>$399.00</h4></div>
                 <div className='w-full border border-[#454444] border-dashed mb-8 mt-10'></div>
                <div className='flex items-center justify-between mb-16'><h4 className='font-readex text-lg font-medium'>Total</h4><h4 className='font-readex text-lg font-medium'>{total}</h4></div>
                <button className=' text-center  py-4 font-bold font-inter text-xl bg-[#0BA42D] w-full text-white  mt-2 mb-16 rounded-xl'>Proceed to Checkout</button>
                <button onClick={() => navigate(-1)} className='flex  text-center w-full  ml-14 items-center gap-2 text-lg font-readex font-semibold'>
                   <IoIosArrowRoundBack className='text-4xl'/> Back to Shopping
            </button>
              </div>
           </div>
         
            </div>
            
       
        )}
        
      </div>
   

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white max-w-64 mx-auto w-full p-5 rounded">
            <p className="mb-4 font-semibold">Haqiqatdan ham mahsulotni Savatdan o'chirmoqchimisiz?</p>
            <div className="flex gap-4">
              <button
                onClick={confirmRemoveItem}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Ha
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Yo'q
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
