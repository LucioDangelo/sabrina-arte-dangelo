import React, { useEffect, useState } from 'react';
//import { traerProductos } from '../data/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../App.css';
import { db } from "../components/firebase/firebaseConfig";
import { query, collection, getDocs, where, limit } from "firebase/firestore";

const ItemListContainer = () => {
    const [ArtData, setArtData] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId)

    useEffect(() => {
        const getArt = async () => {
            if (typeof categoryId !== 'undefined') {
                const q = query(collection(db, "items"), where('category', "==", categoryId), limit(5));
                const docs = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id});        
                  });
                  setArtData(docs);
            } else {
                const q = query(collection(db, "items"), limit(5));
                const docs = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id});        
                  });
                  setArtData(docs);
            }
        }  
        getArt()
      }, [])

    

    return (
        <div className="container">
            <ItemList products={ArtData} />
        </div>
    );
};

export default ItemListContainer;

// const ItemListContainer = (props) => {
//   return (
//     <div>
//     <h3>Greeting: {props.greeting}</h3>
//     <ItemCount stock="5" initial="1"></ItemCount>
//     <ItemList/>
//     <ItemDetailContainer id={1}/>
//     </div>
//   )
// }