import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ShopProvider } from './context/CartContext';
import Cart from './components/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer';

library.add(faCartShopping)

function App() {
  return (
    <ShopProvider>
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </ShopProvider>
  );
}

export default App;
