import React, {createContext, useState} from 'react';



const CartContext =createContext();  
// creo el contexto



const CartProvider =(props)=>{

    const [cart, setCart] = useState([]);

    const addCart = (unProducto, cont) => {
       
        if (isInCart(unProducto.id)){

        setCart(cart.map(producto=>{
            return producto.id===unProducto.id ? {...producto, cantidad: producto.cantidad + cont}:producto
        }))


    }else{
        setCart([...cart, {...unProducto, cantidad: cont}])
        console.log(cart)
        
    
    }

}


const clear = () => setCart([]);

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeItem = (productoX) => setCart(cart.filter(producto => producto.id !== productoX));

const getTotal =()=>{
let total = 0
  cart.map((prodCart) => {total += (prodCart.cantidad*prodCart.precio)})
    return total
}

const cantTotal = () =>{
    let totalProd =0
    cart.map((prod)=>{totalProd += prod.cantidad})
    return totalProd
}




return (
        <>
            <CartContext.Provider value={{cart, addCart, isInCart, removeItem, clear, getTotal, cantTotal}}>         {/*devuelvo el contexto que cree*/}   

                {props.children}
            </CartContext.Provider>
        </>
    )



}

    
    



export {CartContext, CartProvider};       //exporto el contexto y el hook
