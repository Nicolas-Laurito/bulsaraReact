import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {doc, getDoc,} from 'firebase/firestore';
import db from '../Firebase/Firebase';



const ItemDetailContainer = () => {
        
const {id} = useParams()
const [unID , setUnID] = useState ({})

const selectUnID = async(idProd) =>{                //creo una funcion para traer de la base de datos un id seleccionado desde el ItemListContainer
try{
const document = doc(db, "productos", idProd)       //con el doc traigo solo un elemento de la base de datos, lo tengo que importar arriba
const res = await getDoc(document)              //con el metodo getDoc, guardo ese elemento en res
const result = {id: res.id, ...res.data()}      //lo guardo en forma de array en result
setUnID(result)

}catch(error){
    console.log(error)
}


}


useEffect(() => {
  
selectUnID(id)              //llamo a la funcion y le paso el id seleccionado en itemList Container

}, [id])



return (
    <>
     <ItemDetail unProducto={unID} />
    </>
    );
}

export default ItemDetailContainer;
