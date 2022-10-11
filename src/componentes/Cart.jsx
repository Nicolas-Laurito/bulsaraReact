import React, {useContext} from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';



const Cart = () => {
    
    const {cart, removeItem, clear, getTotal} = useContext(CartContext);

    

    

    if (cart.length === 0) {
        return (
          <>
            <div className="container text-center cartVacio">
              <div className="row">
           
                  <h2>El Carrito esta Vacio</h2>
                  <Link className="btn btn-success botonHome" to='/'>Home</Link>
                  
                
              </div>
            </div>
          </>
        );
      }
    
      return (
        <>
            
            <table className='container estiloTabla'>
            <thead className='estiloHead'>
            <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Precio Total</th>
            <th></th>
            </tr>
            
            </thead>
            <tbody className='estiloBody'>
          {cart.map((producto) => (
            
            
            <tr className="estiloLineas">
                <td >
                <img src={producto.img} className="estiloImgCarrito"  alt='Imagen' />
                <h5 className="">{producto.nombre}</h5>
                </td>
                <td><p className="">${producto.precio}</p></td>
                <td><p className="">{producto.cantidad}</p></td>
                <td><p className="">${producto.precio*producto.cantidad}</p></td>
                <td><button className="btn btn-success" onClick={()=>removeItem(producto.id)}>Eliminar</button></td>
                
            </tr>
           
     
          ))}

</tbody>
<tfoot className='estiloFoot'>
            <tr>
            
            <th>Total Abonar ${getTotal()}</th>
            <th><button className="btn btn-success" onClick={()=>clear()}>Vaciar Carrito</button></th>
            <th><Link to='/FinalizarCompra'> <button className="btn btn-success" >Finalizar Compra</button></Link></th>
            </tr>
            </tfoot>
     </table>
   
        </>
      );
    };      

    export default Cart