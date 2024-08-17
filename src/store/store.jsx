import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './productSlice'
import ColorSlice from './colorSlice'
import BrandSlice from './brandSlice'
import CartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    colors: ColorSlice,
    brands: BrandSlice,
    cart: CartSlice,
  },
})
