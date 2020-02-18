import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Favoris from './Favoris'
import Formulaire from './Formulaire'

const Router = () => (
    <Switch>
        <Route exact path="/Favoris" component={Formulaire}></Route>
        <Route exact path="/Formulaire" component={Formulaire}></Route>
    </Switch>
);

///TEST /////
export default Router;