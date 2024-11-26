import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from './productsSlice';

function Products(){
      
    var {pdts} = useSelector(state=>state.productReducer)
    var dispatch = useDispatch()
    console.log(pdts)
    return(<div>
        <h1>Products</h1>
        {
            pdts?.map((pt)=>{
                 return <li>{pt.title.slice(0,20)}
                        <button onClick={()=>{dispatch(addtoCart(pt))}}>Add to cart</button>
                 </li>
            })
        }
    </div>)
}

export default Products