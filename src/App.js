import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Picture from './components/Picture';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Picture/>
      <ItemListContainer greeting="Placeholder para el Catalogo"></ItemListContainer>
      <Footer/>
    </div>
  );
}

export default App;
