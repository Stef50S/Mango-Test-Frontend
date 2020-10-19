import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';
import LoginForm from './components/LoginForm';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact component={LoginForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <AuthenticatedRoute path="/logout" component={Logout}></AuthenticatedRoute>
          <AuthenticatedRoute path="/items" component={ItemList}></AuthenticatedRoute>
          <AuthenticatedRoute path="/add-item" component={CreateItem}></AuthenticatedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
