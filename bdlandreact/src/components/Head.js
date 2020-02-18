import React from 'react';
import {Nav,Navbar,Form,FormControl,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import img1 from './Media/image1.png';
import {Link} from 'react-router-dom';
import {Navigation} from 'react-mdl';
import Router from './Router';

export const Head = () => {
    return (
    <div>
    <Navbar bg="dark" variant="dark">  
            <Link to="/"></Link><img className ="logo"src={img1} alt=""/>
      <Navigation>
                <Link to="Favoris">Favoris</Link>
                <Link to="Formulaire">Ajouter une BD</Link>
      </Navigation>
      
      <Nav className="mr-auto">
      </Nav>

      <Form inline>
        <DropdownButton className="mr-sm-2" id="dropdown-basic-button" title="Genre">
            <Dropdown.Item href="#/action-1">Western</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Aventure</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Humour</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Historique</Dropdown.Item>
            <Dropdown.Item href="#/action-5">SF</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Manga</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Fantastique</Dropdown.Item>
        </DropdownButton>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
      </Form>
      
    </Navbar>

    <Router />
  </div>
    )
}
