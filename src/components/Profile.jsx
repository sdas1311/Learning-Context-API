import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) {
        return (
            <>
            <h2>Profile</h2>
            <p>No user logged in</p>
            </>
        )
    }
    return (
    <>
    <div>Welcome {user.username}</div>
    </>
  )
}

export default Profile