import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
const Login = () => {

    //const navigate = useNavigate();
    const baseURL = "http://localhost:8080/authenticateUser";
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
          email:email,
          password:password,
         
        })
        .then((response) => {
          //navigate("/welcome");
        }).catch(error => {
          alert("error==="+error);
        });

    }

    return(
        <section class="">
  <div class="px-4 py-5 px-md-5 text-center text-lg-start">
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            Log in <br />
            <span class="text-primary">Here</span>
          </h1>
          
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form onSubmit={handleSubmit}>
                
               
                <div class="row">
                
                  

                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2">Email</label>
                      <input type="email" id="form3Example1" class="form-control" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      name="email" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2">Password</label>
                      <input type="password" id="form3Example1" class="form-control" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                      name="password" />
                    </div>
                  </div>

            
                

               
                </div>

        
               

                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Login
                </button>
                <span></span>
                <div className="main-nav__right">
			              <Link to="/register" className="btn btn-primary btn-block mb-4">Signup</Link>
			           </div>

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Login;