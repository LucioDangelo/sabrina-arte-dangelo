import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';
//import { traerProducto } from '../data/products';
import { useParams } from 'react-router-dom';
import { db } from "../components/firebase/firebaseConfig";
import { query, collection, getDocs, doc, where } from "firebase/firestore";

const ItemDetailContainer = ({}) => {
    const [ArtData, setArtData] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const getArt = async () => {
          const q = query(collection(db, "items"), where('id', "==", parseInt(id)));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});        
          });
          setArtData(docs);
        }  
        getArt()
      }, [])
      

    return(
        <div>
        <h1 className="mt-5">Detalle de Producto</h1>
        <div  className="product-list-container">
            {ArtData.map((ArtData) => (
                        <ItemDetail product={ ArtData } key={ArtData.id} />
            ))}
        </div>
        </div>
    )


}

export default ItemDetailContainer