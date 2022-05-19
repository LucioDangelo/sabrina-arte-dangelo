import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Home from './components/Home';
import Picture from './components/Picture';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Picture/>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
