import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar } from './Navbar';

import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Navbar />

                <div className="container">

                    <Switch>
                        <Route exact={true} path='/' component={HomeScreen} />
                        <Route exact={true} path='/login' component={LoginScreen} />
                        <Route exact={true} path='/about' component={AboutScreen} />
                        <Redirect to='/' />
                    </Switch>

                </div>

            </div>
        </Router>
    )
}
