import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Edit from '../containers/Edit'

class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/edit/:id' component={Edit} />
            </Switch>
        </BrowserRouter>
    }
}

export default (Router)