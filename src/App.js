import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from "./components/Cart";
import CartProvider from './context/CartContext';
// import Picture from './components/Picture';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { db } from "./components/firebase/firebaseConfig";
import { query, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

function App() {

  const [ArtData, setArtData] = useState([]);

  useEffect(() => {
    const getArt = async () => {
      const q = query(collection(db, "items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});        
      });
      setArtData(docs);
      console.log(docs);
    }  
    getArt()
  }, [])
  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      {/* <Picture/> */}
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
