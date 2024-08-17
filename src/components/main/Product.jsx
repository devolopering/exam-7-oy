import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, updateCartItem } from '../../store/cartSlice'; 
import { FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import RatingStars from './RatingStars';
import SchoolBus from '/fi-rs-school-bus.svg';
import boxAlt from '/fi-rs-box-alt.svg';
import pramida from '/pramida.svg';
import bulut from '/bulut.svg';
import vector from '/Vector.svg';
import hdmi from '/HDMI.svg';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find(item => item.id === id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://headphones-server.onrender.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    updateCartItemQuantity(1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      updateCartItemQuantity(-1);
    }
  };

  const updateCartItemQuantity = (change) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      dispatch(updateCartItem({ id: product.id, type: change > 0 ? 'increase' : 'decrease' }));
    }
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      dispatch(updateCartItem({ id: product.id, type: 'increase' }));
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  if (!product) return <p>Loading...</p>;

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className='mt-[220px] mb-40'>
      <div className='max-w-[1298px] mx-auto px-5'>
        <div className='mb-[109px]'>
          <div>
            <h3 className='font-readex font-normal text-[#454444] text-xl'>
              Products / Gaming Headsets & Audio / <strong className='font'>{product.name}</strong>
            </h3>
          </div>
          <div className='flex items-start justify-between gap-9 mb-[109px] mt-11'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-[717px] h-[619px] flex items-center justify-between mb-28 px-5 border'>
                <IoIosArrowBack className='text-6xl cursor-pointer' />
                <img src={product.image_url} alt={product.name} />
                <IoIosArrowForward className='text-6xl cursor-pointer' />
              </div>
              <div className='flex items-center gap-[37px]'>
                {Array(5).fill(product.image_url).map((url, index) => (
                  <div key={index} className='w-[114px] py-2 px-2 border'>
                    <img src={url} alt={product.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div>
                <h1 className='text-5xl font-normal font-hammersmith text-[#190D26]'>{product.name}</h1>
                <p className='font-readex text-lg font-medium text-[#190D26]'>{product.description}</p>
                <div className='flex items-center'>
                  <RatingStars rating={product.ratings_stars} />
                  <p className='text-base font-normal font-inter'>({product.rating_counts})</p>
                </div>
                <div className='w-full border border-[#454444] border-dashed mb-4 mt-5'></div>
                <div>
                  <h1 className='font-readex font-bold text-4xl text-[#190D26]'>${product.price} or 99.99/month</h1>
                  <p className='font-readex font-medium text-lg text-[#190D26]'>Suggested payments with 6 month special financing</p>
                </div>
                <div className='w-full border border-[#454444] border-dashed mb-5 mt-5'></div>
                <h3 className='font-readex font-semibold text-2xl mb-7'>Choose a color</h3>
                <ul className="flex items-center gap-2">
                  {product.color_options.map((color, index) => (
                    <li
                      key={index}
                      style={{ background: color }}
                      className="border w-9 h-9 border-black rounded-full"
                    ></li>
                  ))}
                </ul>
                <div className='w-full border border-[#454444] border-dashed mb-8 mt-6'></div>
                <div className='flex items-start gap-16 mb-7'>
                  <div className='flex bg-[#F5F5F5] items-center w-32 justify-between border-2 border-[#0BA42D] rounded-full p-3 mb-4'>
                    <button onClick={handleDecrease} disabled={quantity === 1}>
                      <FaMinus className='text-xl' />
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button onClick={handleIncrease}>
                      <FaPlus className='text-xl' />
                    </button>
                  </div>
                  <p className='text-lg font-semibold font-inter w-1/3'>
                    Only <span className='text-[#0BA42D]'>16 items</span> left! Don’t miss it
                  </p>
                </div>
                <div className='flex items-center justify-between gap-4'>
                  <button 
                    onClick={handleAddToCart} 
                    disabled={isInCart} 
                    className={`${isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0BA42D] '} w-full text-center justify-center flex items-center gap-2 py-4 font-bold font-inter text-xl text-white px-8 rounded-xl`}
                  >
                    <LuShoppingCart className='font-bold text-2xl' /> Add to Cart
                  </button>
                  <button className='border-[3px] border-[#0D2612] py-[9px] px-3 rounded-[10px] text-[#0D2612] duration-500 hover:bg-red-500 hover:text-white'>
                    <FaRegHeart className='text-4xl' />
                  </button>
                </div>
              </div>
              <div className='border-dashed border-[3px] mt-[52px] border-[#6A6969] rounded-[10px]'>
                <div className='flex items-center gap-7 py-[23px] px-9 border-dashed border-b-[3px] border-[#6A6969]'>
                  <img src={SchoolBus} alt="school bus" />
                  <div>
                    <h3 className='font-readex font-semibold text-lg text-[#0D2612]'>Free delivery</h3>
                    <p className='font-medium font-inter text-base border-b-2 border-[#0D2612] text-[#0D2612]'>Enter your Postal Code for Delivery Availability</p>
                  </div>
                </div>
                <div className='flex items-center gap-7 py-[23px] px-9'>
                  <img src={boxAlt} alt="box Alt" />
                  <div>
                    <h3 className='font-readex font-semibold text-lg text-[#0D2612]'>Return Delivery</h3>
                    <p className='font-medium font-inter text-base border-b-2 border-[#0D2612] text-[#0D2612]'>Free delivery 30 Days return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full border border-[#454444] border-dashed mb-5 mt-5'></div>
          <h3 className='font-readex font-semibold text-2xl mb-7 flex items-center justify-between max-w-[1216px] mx-auto'>
            Specification and details 
            <TiArrowSortedDown className='text-[#0BA42D] cursor-pointer text-3xl' />
          </h3>
          <div className='w-full border border-[#454444] border-dashed mb-12 mt-5'></div>

        </div> 
      </div>
      <div className='bg-[#0D2612] pt-28 pb-32'>
        <div className='text-white max-w-[680px] mx-auto text-center flex flex-col items-center justify-center'>
          <h1 className='uppercase text-5xl font-hammersmith font-normal mb-[22px]'>made to play</h1>
          <p className='font-readex font-light text-lg mb-8'>
            The A50 X connects you to all your game libraries from each of your systems, with the push of a button. With unprecedented advances in connectivity, audio and wireless fidelity, A50 X plays at peak performance no matter what, how and where you want to play.
          </p>
        </div>
        <div className='text-white h-[257px] flex items-end gap-10 justify-between max-w-[1130px] mx-auto'>
          <div className='flex flex-col items-center h-full text-center justify-between gap-[18px]'>
            <img src={pramida} alt="pramida" />
            <div className='flex flex-col items-center gap-[18px]'>
              <h3 className='text-2xl font-inter font-bold'>PLAYSYNC 3-SYSTEM SWITCHING</h3>
              <p className='text-base font-inter font-normal'>XBOX + PS5 + PC ALL AT ONCE</p>
            </div>
          </div>
          <div className='flex flex-col items-center text-center h-full justify-between gap-[18px]'>
            <img src={vector} alt="vektor" />
            <div className='flex flex-col items-center gap-[18px]'>
              <h3 className='text-2xl font-inter font-bold'>PRO-G GRAPHENE AUDIO TRANSDUCERS</h3>
              <p className='text-base font-inter font-normal'>INNOVATIVE PRECISION AND CLARITY</p>
            </div>
          </div>
          <div className='flex flex-col items-center text-center h-full justify-between gap-[18px]'>
            <img src={bulut} alt="blutcha" />
            <div className='flex flex-col items-center gap-[18px]'>
              <h3 className='text-2xl font-inter font-bold'>PROFESSIONAL LIGHTSPEED wireless technology</h3>
              <p className='text-base font-inter font-normal'>PLUS BLUETOOTH® MIX FOR TWO DEVICES</p>
            </div>
          </div>
          <div className='flex flex-col items-center text-center h-full justify-end gap-[18px]'>
            <img src={hdmi} alt="hdmi" />
            <div className='flex flex-col items-center gap-[18px]'>
              <h3 className='text-2xl font-inter font-bold mt-5'>HDMI 2.1 4K 120HZ</h3>
              <p className='text-base font-inter font-normal text-nowrap'>SUPERIOR 24-BIT AUDIO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
