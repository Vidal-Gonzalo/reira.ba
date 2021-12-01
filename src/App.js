import './App.css';
import ItemCount from './components/ItemCount';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section id="presentation">
        <ItemListContainer />
        <ItemCount stock={5} initial={0} />
        <ItemDetailContainer/>
      </section>
    </>
  );
}

export default App;
