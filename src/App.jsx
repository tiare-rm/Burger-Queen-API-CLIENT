import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import principal from './components/Principal';
import loginMesero from './components/Mesero/LoginMesero';

ReactDOM.render(
<Router>
<Switch>
    <Route exact path='/' component={principal} />
    <Route path='LoginMesero' component={loginMesero} />
</Switch>
</Router>,
document.getElementById('root')
);