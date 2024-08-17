import React, { useEffect } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts, setError, setLoading } from '../../store/productSlice';
import { addToCart } from '../../store/cartSlice';
import { Link } from 'react-router-dom'; 

const Products = ({ selectedColor, selectedBrand, sortBy }) => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((store) => store.products);
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddToCart = React.useCallback((product) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  useEffect(() => {
    async function fetchProduct() {
      dispatch(setLoading(true));
      let query = `https://headphones-server.onrender.com/products`;
      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }
      if (params.length > 0) {
        query += `?${params.join('&')}`;
      }
      try {
        const response = await fetch(query);
        const data = await response.json();

        const product = [...data].sort((p1, p2) => {
          if (sortBy === 'cheap') {
            return p1.price - p2.price;
          }
          if (sortBy === 'expensive') {
            return p2.price - p1.price;
          }
          return 0;
        });

        dispatch(saveProducts(product));
      } catch (error) {
        dispatch(setError('Failed to load products. Please try again later.'));
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchProduct();
  }, [selectedBrand, selectedColor, sortBy, dispatch]);

  return (
    <div>
      {loading && <h3>Loading products...</h3>}
      {error && <p className="text-red-700">{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {products.map((p) => {
          const isInCart = cartItems.some((item) => item.id === p.id);

          return ( 
            <li className="p-4 flex items-start flex-col justify-between" key={p.id}>
              <div className='w-[299px] h-[300px] border flex items-center justify-center mb-4 px-10'>
                <img className="w-full h-[200px]" src={p.image_url} alt={p.name} />
              </div>
              <div>
       
                <Link to={`/products/${p.id}`}>
                  <h3 className="text-left font-normal font-hammersmith text-xl mt-2 mb-1 cursor-pointer">
                    {p.name}
                  </h3>
                </Link>
                <h4 className="text-left mb-4 text-lg font-readex font-light line-clamp-2">
                  {p.description}
                </h4>
                <div className="flex flex-col items-start gap-6 mb-3">
                  <ul className="flex items-center gap-2">
                    {p.color_options.map((color, index) => (
                      <li
                        key={index}
                        style={{ background: color }}
                        className="border w-7 h-7 border-black rounded-full"
                      ></li>
                    ))}
                  </ul>
                  <h3 className="font-semibold text-black text-[22px] font-readex">${p.price}</h3>
                </div>
              </div>
              <button 
                onClick={() => handleAddToCart(p)} 
                disabled={isInCart} 
                className={`${isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0BA42D] '} flex items-center gap-2 py-4 font-bold font-inter text-xl text-white px-8 mt-2 rounded-xl`}
              >
                <LuShoppingCart className='font-bold text-2xl'/> Add to Cart
              </button>
            </li>
          );
        })}
      </ul>

   
    </div>
  );
};

export default Products;
