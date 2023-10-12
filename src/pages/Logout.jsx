import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/movieland");
            console.log("Signed out successfully")
            alert("Logged out. We will miss you!")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home;