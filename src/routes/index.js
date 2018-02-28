import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartView  from './../views/start'
import ContactsView from './../views/contacts';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={StartView}/>
      <Route path='/contacts' component={ContactsView}/>
    </Switch>
  </main>
);

export default Main;