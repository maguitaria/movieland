import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
            alert("Logged out. We will miss you!")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <>
            
        			<button onClick={handleLogout}>
                 Log out
                    </button>
        
        </>
    )
}
 
export default Home;