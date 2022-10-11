import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import React, {useState, useContext} from 'react';
import { CartContext } from './Context/CartContext';
import db from '../Firebase/Firebase';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Contacto/Form.css'







const FinalizarCompra = () => {

const {cart,getTotal, clear } = useContext(CartContext);     //lo que traigo del context

//CREO UN USESTATE PARA GUARDAR LA ORDEN Y MOSTRARSELA AL CLIENTE
const [numeroOrden, setnumeroOrden] = useState();

//creo el useState con un objeto vacio
const [comprador, setcomprador] = useState({        
    nombre:"",
    email:"",
    telefono:""
});

const {nombre, email, telefono} = comprador


//CREO UNA FUNCION PARA MANDAR LA ORDEN DE COMPRA GENERADA A LA BASE DE FIREBASE
const generarOrden=async(data)=>{               //genero una funcion asincrona para poder guardar los datos en la base de datos de firebase
try {
 const col = collection (db, "Orden")       //llamo a la coleccion donde voy a guardar la orden de compra
 const orden = await addDoc(col, data)            //con el metodo addDoc (que tengo que importar arriba) mando la colecion y los datos que le pase a la funcion
 setnumeroOrden(orden.id)                       //guardo en una variable el ID que genero al crear la orden en firebase
 clear()                                    //vacio el carrito
} catch (error) {
    console.log(error)
}

}


//CREO UNA FUNCION QUE RECIBE COMO PARAMETRO UN EVENTO DONDE VOY GUARDANDO EN MI VARIABLE LOS DATOS INGRESADOS POR EL USUARIO
const cambiosForm = (e) =>{                     
    setcomprador(({
        ...comprador,
        [e.target.name]: e.target.value     

    }))
}

//CREO UNA FUNCION PARA GUARDAR LOS DATOS DE LA COMPRA Y DEL FORMULARIO
const formulario =(e) =>{           //obtengo los datos que luego voy a guardar en la base de datos de firebase
    e.preventDefault()          //con el prevent default evito que se recargue la pagina
    const items = cart.map(e=>{return{id:e.id, title:e.nombre, price:e.precio, cantidad:e.cantidad}})
    const dia = new Date()
    const total = getTotal()
    const data = {comprador, items, dia, total}
    generarOrden(data)
    
}

const mensaje =(orden) =>{
    Swal.fire({
        title: 'Gracias por su compra!!!!',
        text: `Su numero de orden de compra es: ${orden}`,
        confirmButtonText: 'Aceptar ' ,
        
})
}

const actualizaStock =()=>{
    try {
        
        cart.forEach(item=>{
        const docRef = doc (db, "productos", item.id) 
        const nuevoStock = item.stock - item.cantidad    
        updateDoc (docRef, {stock:nuevoStock}) 
        
    }
    
    )
                                            
       } catch (error) {
           console.log(error)
       }
}

    return (
        <>
        {!numeroOrden? <div>
        <form className="estilosForm" onSubmit={formulario} >
            <h2 data-aos="fade-right" data-aos-duration="1500">Completar Datos Para Finalizar la compra</h2>
            <input className="form-control"  type="text" name="nombre" placeholder='Nombre' value={nombre} onChange={cambiosForm} data-aos="fade-left" data-aos-duration="1500" />  <br></br>      {/*en value va lo que guarde como atributo de la variable comprador*/}
            <input className="form-control"  type="text" name="email" placeholder='email' value={email} onChange={cambiosForm} data-aos="fade-right" data-aos-duration="1500" />    <br></br>
            <input className="form-control"  type="number" name="telefono" placeholder='Telefono' value={telefono} onChange={cambiosForm} data-aos="fade-left" data-aos-duration="1500"/>    <br></br>
            
            <input type="submit" name="comprar" className='btn btn-success btnBot' />    
        </form> </div> :
              <div>
              {mensaje(numeroOrden)}
              <Link to='/' className="btn btn-success estiloBoton btnBot1">Inicio</Link>
              </div>    
        
        }
        {
        actualizaStock()
        }  
        </>
    );
}

export default FinalizarCompra;
