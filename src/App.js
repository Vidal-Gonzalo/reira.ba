import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import Checkout from "./components/Checkout/Checkout";
import { ShopProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping, faCheckCircle);

function App() {
  return (
    <ShopProvider>
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalog">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </ShopProvider>
  );
}

export default App;
