import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import NotFound from './NotFound/NotFound';
import Friends from './components/Friends/Friends';
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Friends>
          </Friends>
        </Route>
        <Route path="/navbar">
          <Navbar>
          </Navbar>
        </Route>
        <Route path="/shop">
          <Shop>
          </Shop>
        </Route>
        <Route>
          <NotFound>
          </NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
