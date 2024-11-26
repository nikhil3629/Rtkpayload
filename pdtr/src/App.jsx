import logo from './logo.svg';
import './App.css';
import pdts from './features/products/pdts.json'
import Products from './features/products/Products';
import { useSelector } from 'react-redux';
function App() {
  // console.log(pdts)
  var {cartItems} = useSelector(state=>state.productReducer.cartItems)
  return (
    <div>
      <h2>CartItems:{cartItems?.length}</h2>
       <Products></Products>
    </div>
  );
}

export default App;
