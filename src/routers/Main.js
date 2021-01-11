import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';



export default function PostRouter() {
    let auth = localStorage.getItem('auth-token')
    if(auth)
        return (
            <Router>
                <Switch>
                    <Route path='/forum' component={App} />
                </Switch>
            </Router>
        );
    else
        window.location.href = '/';
}
