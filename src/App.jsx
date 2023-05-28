import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Principal from './components/Principal';
import Login from './components/Login';

ReactDOM.render(
<Router>
<Switch>
    <Route exact path='/Principal' component={Principal} />
    <Route path='Login' component={Login} />
</Switch>
</Router>,
document.getElementById('root')
);