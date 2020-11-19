import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Blog } from '../components/Blog';
import { Home } from '../components/Home';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/blog" component={Blog}/>                    
                </Switch>
            </div>
        </Router>
    )
}
