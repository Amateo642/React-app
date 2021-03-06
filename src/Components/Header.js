import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import React, { Component } from 'react'
import logo from './logo.png'
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <Router basename="/">
                <Navbar /*fixed="top"*/ collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/"> Home </Nav.Link>
                                <Nav.Link as={Link} to="/about"> About us </Nav.Link>
                                <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                                <Nav.Link as={Link} to="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>                  
            </Router>
        )
    }
}