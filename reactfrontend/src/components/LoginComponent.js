import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const LoginComponent = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        axios.post(axios.defaults.baseURL + 'token-auth', {
            username: username,
            password: password,
        }).then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                props.setUserCredentials(res.data.user.username, res.data.user.first_name, res.data.user.last_name)
                history.push('/')
            } else {
                console.log("Invalid login credentials");
            }
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 64 }}>
            <h1 style={{ marginBottom: 64 }}>Login</h1>
            <form onSubmit={handleLogin} style={{ textAlign: "center" }}>
                <div>
                    <label htmlFor="username" style={{ display: "block", textAlign: "center" }}>Username</label>
                    <input
                        id="username"
                        name="username"
                        style={{
                            fontSize: 20,
                            padding: 5,
                            margin: 16,
                            width: 200,
                            borderRadius: 15,
                            border: "2px solid blue"
                        }}
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} />
                </div>
                <div style={{ marginBottom: 32 }}>
                    <label htmlFor="password" style={{ display: "block", textAlign: "center" }}>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        style={{
                            fontSize: 20,
                            padding: 5,
                            margin: 16,
                            width: 200,
                            borderRadius: 15,
                            border: "2px solid blue"
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <input
                    type="submit"
                    value="Log in"
                    style={{
                        textAlign: "center",
                        backgroundColor: "black",
                        color: "white",
                        padding: 10,
                        fontSize: 16,
                        border: "none",
                        borderRadius: 15
                    }} />
            </form>
        </div>
    )
}

export default LoginComponent
