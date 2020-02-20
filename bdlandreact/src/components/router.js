import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Favoris from './Favoris'
import Formulaire from './Formulaire'
import Home from './Home'
import ConnectionAdmin from './ConnectionAdmin'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Favoris" component={Formulaire}></Route>
        <Route exact path="/Formulaire" component={Formulaire}></Route>
        <Route exact path="/Admin" component={ConnectionAdmin}></Route>
    </Switch>
);
//ReactDOM.render(<Router />, document.getElementById('router'));
///TEST /////
export default Router;

