import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import {CartProvider} from './componentes/Context/CartContext';
import Form from './componentes/Contacto/Form';
import FinalizarCompra from './componentes/FinalizarCompra';
import Home from './componentes/PaginaInicio/Home';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import Footer from './componentes/Footer/Footer';


const App = () => {
    return (
        <>
         <CartProvider>
        <BrowserRouter>
        
                <Header/>                  
            <Routes>
                <Route path= '/' element={<Home/>}></Route>                      
                <Route path= '/categoria/:categoria' element={<ItemListContainer/>}></Route>                      
                <Route path= '/detalles/:id' element={<ItemDetailContainer/>}></Route>    
                <Route path= '/cart' element={<Cart/>}></Route> 
                <Route path= '/form' element={<Form/>}></Route> 
                <Route path= '/FinalizarCompra' element={<FinalizarCompra/>}></Route> 
                <Route path= '/QuienesSomos' element={<QuienesSomos/>}></Route> 
                
                
            </Routes>
                <Footer/>
        </BrowserRouter>
        </CartProvider>
        </>
    );
}

export default App;
