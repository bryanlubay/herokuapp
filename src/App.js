// heroku git:remote -a bryanlubay

import React from 'react';
import { Card, Form, Button, Alert, Accordion, Table, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, /*Redirect,*/ Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Unity from './components/Unity'
import Coronavirus from './components/Coronavirus'
import CompTIA from './components/CompTIA'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// **********************************************************************
// **********************************************************************
// **********************************************************************
function App() {


  document.title = "Bryan Lubay's App :)"


  return (

  <div className="App" >
      <header className="App-header">

      <Container >
        <Navbar fixed="top"  bg="light" expand="lg">
                <Navbar.Brand>Bryan Lubay's App</Navbar.Brand>
                <Nav.Link href="/comptia">CompTIA</Nav.Link>
                <Nav.Link href="/coronavirus">Coronavirus</Nav.Link>
                <Nav.Link href="/unity">Unity</Nav.Link>
        </Navbar>
      </Container>



      </header>

      <Router>
        <Switch>
          <Route exact path='/unity' render={Unity}/> 
          <Route exact path='/comptia' render={CompTIA}/> 
          <Route exact path='/coronavirus' render={Coronavirus}/> 

        </Switch>
      </Router>
    </div>

  );
}

export default App;
