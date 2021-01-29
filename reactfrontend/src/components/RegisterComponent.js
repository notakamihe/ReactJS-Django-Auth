import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const RegisterComponent = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const handleSignIn = (e) => {
        e.preventDefault()

        axios.post(axios.defaults.baseURL + 'api/users/', {
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password,
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            props.setUserCredentials(res.data.username, res.data.first_name, res.data.last_name)
            history.push('/')
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 64 }}>
            <h1 style={{ marginBottom: 64 }}>Register</h1>
            <form style={{ textAlign: "center" }} onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="first-name" style={{ display: "block", textAlign: "center" }}>First name</label>
                    <input
                        id="first-name"
                        name="first-name"
                        style={{
                            fontSize: 20,
                            padding: 5,
                            margin: 16,
                            width: 200,
                            borderRadius: 15,
                            border: "2px solid blue"
                        }}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="last-name" style={{ display: "block", textAlign: "center" }}>Last name</label>
                    <input
                        id="last-name"
                        name="last-name"
                        style={{
                            fontSize: 20,
                            padding: 5,
                            margin: 16,
                            width: 200,
                            borderRadius: 15,
                            border: "2px solid blue"
                        }}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
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
                        onChange={(e) => setUsername(e.target.value)} />
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
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input
                    type="submit"
                    value="Sign up"
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

export default RegisterComponent
