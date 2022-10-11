import React from 'react';
import './Item.css'
import {Link} from 'react-router-dom'






const Item = ({ nombre, precio, img, id}) => {
    
    
    return (
        <>
        
            
            <div className="card"  style={{width: '15rem' , height: '23rem'}}>
            <img src={img} className="estiloCard card-img"  alt='Imagen' />
            <div className="card-body">
            <h2 className="card-title">{nombre}</h2>
            <p className="card-text">Precio: ${precio}</p>
            </div>

            <Link to={`/detalles/${id}`}>
            <button className="btn btn-success">Ver</button>
            </Link>
        </div>
        
        
        </>
    );
}

export default Item;
