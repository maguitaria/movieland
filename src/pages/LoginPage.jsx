import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 import {
   CDBInput,
   CDBCard,
   CDBIcon,
   CDBCardBody,
   CDBBtn,
   CDBLink,
   CDBContainer,
 } from "cdbreact";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
             alert("Signed in. Welcome!")
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return (
      <>
        <main>
          <section>
            <CDBContainer>
              <CDBCard style={{ width: "30rem" }}>
                <div
                  style={{ background: "black" }}
                  className="text-center text-white"
                >
                  <p className="h5 mt-2 py-4 font-weight-bold">Login</p>
                </div>
                <CDBCardBody className="mx-4">
                  <div>
                    <label htmlFor="email-address"></label>
                    <CDBInput
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password"></label>
                    <CDBInput
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
                    <p className="m-0">Remember me </p>
                    <p className="m-1">Forgot password?</p>
                  </div>
                  <CDBBtn
                    color="dark"
                    outline
                    className="btn-block my-3 mx-0"
                    onClick={onLogin}
                  >
                    Login
                  </CDBBtn>
                  <p className="text-center">
                    Not a member?{" "}
                    <CDBLink className="d-inline p-0">
                      <NavLink to="/signup">Sign up</NavLink>
                    </CDBLink>
                  </p>
                  <div className="flex-row my-3 d-flex justify-content-center">
                    <CDBBtn color="white" className="m-0" outline>
                      <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn color="white" className="m-0" outline>
                      <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn color="white" className="m-0" outline>
                      <CDBIcon fab icon="linkedin-in" />
                    </CDBBtn>
                    <CDBBtn color="white" className="m-0" outline>
                      <CDBIcon fab icon="github" />
                    </CDBBtn>
                  </div>
                </CDBCardBody>
              </CDBCard>
            </CDBContainer>
          </section>
        </main>
      </>
    );
}
 
export default Login