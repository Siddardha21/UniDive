import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const Register = () => {

    //const navigate = useNavigate();
    const baseURL = "http://localhost:8080/registerUser";
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
          firstname: firstname,
          lastname: lastname,
          email:email,
          username:username,
          password:password,
          securityQuestion: securityQuestion,
          securityAnswer:securityAnswer
        })
        .then((response) => {
          
          //navigate("/login");
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
            Sign Up <br />
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
                      <label class="form-label" for="form3Example1">First Name</label>
                      <input type="text" id="form3Example1" class="form-control" 
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)} 
                      name="firstname" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2">Last name</label>
                      <input type="text" id="form3Example1" class="form-control" 
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)} 
                      name="lastname" />
                    </div>
                  </div>
                </div>
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2">User name</label>
                      <input type="text" id="form3Example1" class="form-control" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} 
                      name="username" />
                    </div>
                  </div>
                  

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

            
                

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Security Question</label>
                  <select 
                  value={securityQuestion}
                      onChange={(e) => setSecurityQuestion(e.target.value)} 
                      name="securityQuestion"
                  class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="What is your birth place">What is your birth place</option>
                    <option value="What is your Nick name">What is your Nick name</option>
                    <option value="What is your native place">What is your native place</option>
                    </select>
                </div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Security Answer</label>
                  <input type="text" id="form3Example4" class="form-control" value={securityAnswer}
                      onChange={(e) => setSecurityAnswer(e.target.value)} 
                      name="securityAnswer" />
                </div>

               

                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                <span></span>
                <div className="main-nav__right">
			              <Link to="/login" className="btn btn-primary btn-block mb-4">Login</Link>
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

export default Register;