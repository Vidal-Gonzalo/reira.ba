import './App.css';
import ItemCount from './components/ItemCount';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';



function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section id="presentation">
        <ItemListContainer greeting="Hola!" />
        <ItemCount stock={5} initial={0} />
      </section>
    </>
  );
}

export default App;
