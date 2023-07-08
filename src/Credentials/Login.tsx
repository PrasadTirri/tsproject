import React, {useState} from 'react'

const Login:React.FC = () => {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    

    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()
        if (username==="Prasad" && password==="Tirri" ){

        }
        
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Login Page</h1>

        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='username'>Username</label> <br />
            <input type='text' value={username} id='username' onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div>
            <label htmlFor='password'>Password</label> <br />
            <input type='password' value={password} id='password' onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login