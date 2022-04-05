import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import "./App.css";
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import AddProduct from './components/AddProduct/AddProduct';
import Orders from './components/Orders/Orders';


function App() {
  

  return (
    <div className="App">
      <AuthProvider><Router>
      <Route>
          <Navbar>
          </Navbar>
        </Route>
      <Switch>
        <Route exact path="/">
          <Home>
          </Home>
        </Route>
        <Route path="/shop">
          <Shop>
          </Shop>
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
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <Route path="/addProducts">
          <AddProduct></AddProduct>
        </Route>
        <PrivateRoute path="/shipping">
          <Shipping></Shipping>
        </PrivateRoute>
        <PrivateRoute path="/placeOrder">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route>
          <NotFound>
          </NotFound>
        </Route>
      </Switch>
      </ Router>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
