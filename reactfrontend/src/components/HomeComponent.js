import React from 'react'
import { useHistory } from 'react-router-dom'

const HomeComponent = (props) => {
    let history = useHistory()

    if (!props.userInfo.isLoggedIn) {
        history.push("/login")
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push("/login")
        props.clearUserCredentials()
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 64 }} v>
            <h1 style={{ marginBottom: 64 }}>Welcome {props.userInfo.firstName} {props.userInfo.lastName} ({props.userInfo.username})</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>

    )
}

export default HomeComponent
