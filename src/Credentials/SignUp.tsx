import React, {useState} from 'react'
import { database } from '../firebase/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { redirect, useNavigate } from 'react-router-dom'
import './SignUp.css'
type Props = {}

const SignUp = (props: Props) => {
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const history=useNavigate()


    const handleSubmit=(event:React.FormEvent)=>{
      event.preventDefault()
      createUserWithEmailAndPassword(database, email, password).then(data=>{
        console.log(data, 'fgh')
        history('/login')
      })       
    }

    const handleLogin=()=>{
      history('/login')
    }

  return (
    <div>
        <h1>Sign Up</h1>
        
        
        <form onSubmit={handleSubmit}>
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="row">
                        <img src="https://i.imgur.com/CXQmsmF.png" alt='logoo' className="logo" />
                    </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                        <img src="https://i.imgur.com/uNGdWHi.png" alt='logo' className="image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                        <input className="mb-4" type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter a valid email address" />
                    </div>
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">User Name</h6></label>
                        <input className="mb-4" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Enter UserName" />
                    </div>
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter password" />
                    </div>
                    <div className="row px-3 mb-4">
                       
                        <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    <div className="row mb-3 px-3">
                        <button type="submit" style={{border:'1px solid gray', backgroundColor:'lightgreen'}} className="btn btn-blue text-center">Register</button>
                    </div>
                    <div className="row mb-4 px-3">
                      <p style={{color:'red'}}>Already have Account?</p>
                    <button style={{border:'1px solid gray', backgroundColor:'orange'}} className="btn btn-blue text-center" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-blue py-4">
            <div className="row px-3">
                <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                <div className="social-contact ml-4 ml-sm-auto">
                    <span className="fa fa-facebook mr-4 text-sm"></span>
                    <span className="fa fa-google-plus mr-4 text-sm"></span>
                    <span className="fa fa-linkedin mr-4 text-sm"></span>
                    <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </form>
    </div>
  )
}
export default SignUp