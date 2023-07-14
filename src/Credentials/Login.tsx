import React, {useState} from 'react'
import { database } from '../firebase/FirebaseConfig'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const history=useNavigate()


    const handleSubmit=(event:React.FormEvent)=>{
      event.preventDefault()
      signInWithEmailAndPassword(database, username, password).then(data=>{
        console.log(data, 'fgh')
        history('/home')
      })        
    }

    const navigateToSingnup=()=>{
      history("/signup")
    }

    



  return (
    <div style={{textAlign:'center', padding:'5%'}}>
        {/* <h1>Login Page</h1> */}

        
        <div id="main-wrapper" className="container">
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="mb-5">
                                    <h1 className="font-weight-bold text-theme">Login</h1>
                                </div>

                                <h6 className="h5 mb-0">Welcome back!</h6>
                                <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" value={username} onChange={(e)=> setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} id="exampleInputPassword1" />
                                    </div>
                                    <button style={{border:'1px solid gray', backgroundColor:'green', color:'white'}} className='btn btn-theme m-1' type='submit'>Submit</button> <br />
                                    <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className="account-block rounded-right">
                                <div className="overlay rounded-right"></div>
                                <div className="account-testimonial">
                                    <h4 className="text-white mb-4">This  beautiful theme yours!</h4>
                                    <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                    <p>- Admin User</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            

            <p className="text-muted text-center mt-3 mb-0">Don't have an account? <span onClick={navigateToSingnup} className="text-primary ml-1">register</span></p>

            

        </div>
       
    </div>
    
</div>
            
    </div>
  )
}

export default Login