/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
import Home from './components/Home';
import About from './components/About';
import React from 'react';
import Car from './components/Car';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Write component imports here //



// Start Router function here //
function Router (){
    return (
        <BrowserRouter>
        <Navigation />
                            <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/about" component = {About} />
                <Route path="/car/:id" component = {Car} />
        </Switch>
        </BrowserRouter>

      
    )
}

export default Router;