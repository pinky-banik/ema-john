import React, { useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,sendEmailVerification ,sendPasswordResetEmail,updateProfile } from "firebase/auth";
import InitilizeAuthentication from '../Firebase/Config/FirebaseInit';
InitilizeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const AuthPractise = () => {
    const [name,setName] = useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const [user,setUser] = useState({});
  const[error,setError]= useState('');
  const [isLogin,setIsLogin] = useState(false);



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
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser({});
    })
    .catch((error)=>{
      console.log(error.message);
    })

  }

  const toggleLogin = e  =>{
    setIsLogin(e.target.checked);
  }
  const handleNameChange = e =>{
    setName(e.target.value);
  }
  const handleEmailChange =e=>{
    setEmail(e.target.value);
    
  }
  const handlePasswordChange=e=>{
    setPassword(e.target.value);
    
  }
  const handleRegistration= e =>{
    e.preventDefault();
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }
    
    isLogin ?  processLogin (email,password): registerNewUser (email,password);
  }

  const processLogin = (email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user= result.user;
      setEmail('');
      console.log(user);
    })
    .catch(error => {
      setError(error.message);
    })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }
  const handleResetPassword = () =>{
    sendPasswordResetEmail(auth,email)
    .then(result=>{})
  }
    return (
        <div>
            <form onSubmit={handleRegistration} className='p-5'>
      <h3>Please {isLogin? 'Login': 'Register'}</h3>
      {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder=' Email' required/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input  onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder='Password' required/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered
                </label>
              </div>
            </div>
          </div>
          <div className='row mb-3 text-danger'> {error}</div>
          <button type="submit" className="btn btn-primary">{isLogin? 'Login' : 'Register'}</button>
          <button onClick={handleResetPassword}  className='btn btn-primary mx-5'>Reset Password</button>
        </form>
      <div className='text-center'> ----------------------------------------------</div>
      {
        !user.name ? 
          <div className='text-center'>
      <button style={{width:"25%",margin:"5%"}} className='button' onClick={handleGoogleSignIn}>Google Sign In</button>
      <button style={{width:"25%",margin:"5%"}} className='button' onClick={handleGithubSignIn}>Github Sign In</button> <br />
      </div>:
      
      <button style={{width:"25%",margin:"5%"}} className='button' onClick={handleSignOut}>Sign Out</button>
        }
      
      <br />
      {
        user.name && <div>
          <h1>{user.name}</h1>
          <p>email {user.email}</p> <br />
          <img src={user.photo} alt="userPhoto" />
        </div>
      }
        </div>
    );
};

export default AuthPractise;