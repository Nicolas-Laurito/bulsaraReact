import React from 'react';
import './Header.css'
import NavBar from './NavBar' 

import CartWidget from './CartWidget'




const Header = () => {
    return (
<div className="container-fluid estiloHeader">
<div className="row">
        <div className='col-md-12 '>
            
            <h1 >BULSARA GROW SHOP</h1>
            </div>

    <div className="row">
            <div className='displayMenu col-md-8'>
                
            <NavBar/>
            
            </div>
            
            <div className='displayCarrito col-md-4'>
            
            <CartWidget/>
            </div>
            </div>
            </div>  
            </div>          
            
    );
}

export default Header;
