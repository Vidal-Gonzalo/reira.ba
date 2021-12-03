import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailPage from './pages/ItemDetailPage';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
