import pdts from './pdts.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    pdts,
    cartItems:[]
}


export const productsSlice = createSlice({
  name: 'pdts',
  initialState,
  reducers: {
     addtoCart:(state,action)=>{
      state.cartItems.push(action.payload)
     }
  },
})

export const {addtoCart} =productsSlice.actions
const productReducer = productsSlice.reducer
export default productReducer