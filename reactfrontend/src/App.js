import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'

export default class App extends React.Component {
    state = {
        isLoggedIn: localStorage.getItem('token') ? true : false,
        username: '',
        firstName: '',
        lastName: ''
    }

    componentDidMount() {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/'
    }

    setUserCredentials = (username, firstName, lastName) => {
        this.setState({ isLoggedIn: true })
        this.setState({ username: username })
        this.setState({ firstName: firstName })
        this.setState({ lastName: lastName })
    }

    clearUserCredentials = () => {
        this.setState({ username: '' })
        this.setState({ firstName: '' })
        this.setState({ lastName: '' })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <HomeComponent {...this.props} userInfo={this.state} clearUserCredentials={this.clearUserCredentials} />} />
                    <Route path="/register" render={() => <RegisterComponent {...this.props} setUserCredentials={this.setUserCredentials} />} />
                    <Route path="/login" render={() => <LoginComponent {...this.props} setUserCredentials={this.setUserCredentials} />} />
                </Switch>
            </Router>
        )
    }
}
