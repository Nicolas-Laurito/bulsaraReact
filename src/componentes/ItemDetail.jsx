import {React,useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './Context/CartContext';
import './ItemDetail.css'



const ItemDetail = ({unProducto}) => {
    const {addCart} = useContext(CartContext);

    const [carrito ,setCarrito ] = useState (false)
    

    function onAdd (cont) {
       
        setCarrito(true)
        addCart(unProducto, cont)
    
           
    }       

    return (
        <div className="container">
            <div className="row " key={unProducto.id}>
        
            <div className='card nuevoCard'>
                <div className='nuevoIMG'>
            <img src={unProducto.img} className="estiloCard card-img"  alt='Imagen' />
            </div>
            <div className=" nuevoCard1">
            <h2 className="card-title">{unProducto.nombre}</h2>
            <p className="card-text">{unProducto.descripcion}</p>
            
            </div>
            <div className='nuevoCard2'>
            <p className="card-text">Precio: ${unProducto.precio}</p>
                {carrito ? <Link className="btn btn-success" to='/'>Seguir Comprando</Link> :
            <ItemCount stock={unProducto.stock} initial={1} onAdd={onAdd} />
            
        }</div>
</div>
            </div>
            
        
        </div>
        

    );
}

export default ItemDetail;
