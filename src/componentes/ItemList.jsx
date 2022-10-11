import React from 'react';
import Item from './Item';



const ItemList = ({productos}) => {


    return (
        <>
       {productos.map((unProducto)=>(<Item  id={unProducto.id} key={unProducto.id} nombre={unProducto.nombre} descripcion={unProducto.descripcion}  precio={unProducto.precio} stock={unProducto.stock} img={unProducto.img} />))}
       </>
       
    );
}
export default ItemList;


