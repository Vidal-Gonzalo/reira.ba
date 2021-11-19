import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section id="presentation">
        <ItemListContainer greeting="¡Hola!" />
      </section>
    </>
  );
}

export default App;
