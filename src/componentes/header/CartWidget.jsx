import {React, useContext} from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../Context/CartContext';



const CartWidget = () => {
    
    const {cantTotal} = useContext(CartContext);
    
    
    return (
        
        <div className="estiloIcono">
            
        
        <Link to='/Cart'><FontAwesomeIcon icon=  {faCartShopping} /><span className='cantidadProductos'>{cantTotal()}</span></Link>    
        
        
        </div>
    );
}

export default CartWidget;
