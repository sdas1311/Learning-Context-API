import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    
    const [ username, setUsername ] = useState ('')
    const [password, setpassword] = useState('')
    
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })

    }

    return (
    <>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username" />
        <br/>
        <input type="password" 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password" />
        <br/>
        <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Login