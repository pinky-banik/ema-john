import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Friends from './components/Friends/Friends';
import "./App.css";
import Home from './components/Home/Home';
import FriendDetail from './components/FriendDetail/FriendDetail';
import About from './components/About/About';
import Culture from './components/Culture/Culture';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import ReviewItem from './components/ReviewItem/ReviewItem';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/navbar">
          <Navbar>
          </Navbar>
        </Route>
      <Switch>
        <Route exact path="/">
          <Home>
          </Home>
        </Route>
        <Route path="/friends">
        <Friends>
        </Friends>
        </Route>
        <Route path="/shop">
          <Shop>
          </Shop>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path ="/about">
          <About></About>
        </Route>
        <Route exact path="/about/culture">
          <Culture></Culture>   
        </Route>
        <Route path="/orderReview">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/manageInventory">
          <ManageInventory></ManageInventory>
        </Route>
        <Route path="/review">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/placeOrder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route>
          <NotFound>
          </NotFound>
        </Route>
      </Switch>
      </ Router>
    </div>
  );
}

export default App;
