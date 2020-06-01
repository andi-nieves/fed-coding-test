import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'Redux/store';
import Main from 'Screens/Main';
import Preview from 'Screens/Preview';
import Header from 'Components/Header';
import { Nav } from 'react-bootstrap';

function App() {
    return (
        <Router history={history}>
            <>
                <Header>
                    <Nav.Link href="#culture">Culture</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#clients">Clients</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#careers">Careers</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Header>
                <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <Route path="/" exact component={Main} />
                    <Route path="/preview" component={Preview} />
                </div>
                <Header position="bottom">
                    <Nav.Link href="#privacy">Privacy</Nav.Link>
                    <Nav.Link href="#sitemap">Sitemap</Nav.Link>
                    <Nav.Link href="#facebook">Facebook</Nav.Link>
                    <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
                    <Nav.Link href="#instagram">Instagram</Nav.Link>
                    <Nav.Link href="#twitter">Twitter</Nav.Link>
                </Header>
            </>
        </Router>
    );
}

export default App;
