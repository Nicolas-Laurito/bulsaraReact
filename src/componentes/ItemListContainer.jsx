import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import db from '../Firebase/Firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {
    const [prod, setProd] =useState([]);   //inicio en un array vacio
    const {categoria} = useParams()

    const getDataCategory =async (cat) =>{                       //creo una funcion asincrona para traer filtrados los datos segun la categoria
      try{
      const document = query (collection(db,"productos"), where ("categoria","==", cat ) )      // con el query y where filtro mi coleccion
      const col = await getDocs (document)                //con getDocs traigo todos los documentos de una coleccion, el metodo getDocs lo tengo que importar arriba
      const result = col.docs.map((doc)=>doc={id:doc.id, ... doc.data()})     //mapeo los datos en result
      setProd(result)                                     //cargo en mi variable 
    }
    catch(error){
      console.log(error)
    }
    }


useEffect(() => {
  // categoria ? getDataCategory(categoria):getData()           //creo un condicional donde si categoria existe traigo filtrado y sino traigo todos los productos
getDataCategory(categoria)
       
},[categoria] );            //pongo categoria para que ejecute cada vez que esa variable se modifica

    
return (
       
        <div className='row'>
            <ItemList productos= {prod}/>
        </div>
   );
}

export default ItemListContainer;
