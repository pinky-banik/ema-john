import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Culture from './components/Culture/Culture';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import GrandFatherHouse from './components/GrandFatherContex/GrandFatherHouse.js/GrandFatherHouse';
import Friends from './components/FriendsRoute/Friends/Friends';
import FriendDetail from './components/FriendsRoute/FriendDetail/FriendDetail';
import InitilizeAuthentication from './components/Firebase/Config/FirebaseInit';
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';



InitilizeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();


function App() {
  const [user,setUser] = useState({});
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const {displayName,email,photoURL} =result.user;
      const loggedInUser ={
        name: displayName,
        email: email,
        photo : photoURL
      }
      setUser(loggedInUser);
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  const handleGithubSignIn=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const {displayName,email,photoURL} =result.user;
      const loggedInUser ={
        name: displayName,
        email: email,
        photo : photoURL
      }
      setUser(loggedInUser);
    })
    .catch((error)=>{
      console.log(error.message);
    })
  };


  return (
    <div className="App">
      <button style={{width:"25%",margin:"5%"}} className='button' onClick={handleGoogleSignIn}>Google Sign In</button>
      <button style={{width:"25%",margin:"5%"}} className='button' onClick={handleGithubSignIn}>Github Sign In</button>
      <br />
      {
        user.name && <div>
          <h1>{user.name}</h1>
          <p>email {user.email}</p> <br />
          <img src={user.photo} alt="userPhoto" />
        </div>
      }
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
        <Route path="/grandFather">
          <GrandFatherHouse></GrandFatherHouse>
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
