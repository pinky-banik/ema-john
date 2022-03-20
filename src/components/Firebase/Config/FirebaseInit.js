import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";


const InitilizeAuthentication = () =>{
    initializeApp(firebaseConfig);

};
export default InitilizeAuthentication;