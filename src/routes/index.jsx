import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/index';
import MovieDetail from '../pages/movieDetail';


export default function Routes() {

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/movie/:id" exact component={MovieDetail}/>  
      </Switch>
    </BrowserRouter>
  )
}