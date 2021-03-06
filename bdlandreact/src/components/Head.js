import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import img1 from './Media/image1.png';
import { Link } from 'react-router-dom';
import { Navigation } from 'react-mdl';
import Router from './router';
import '../App.css';


export const Head = () => {
  return (
    <div class="menu">
      <Navbar>
        <Link to="Home"><a href="https://fontmeme.com/fr/polices-de-bande-dessinee/"><img src="https://fontmeme.com/permalink/200219/5f3620e7bd2136f4346843d9c857aa75.png" alt="polices-de-bande-dessinee" border="0" /></a></Link>
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
            <Button variant="info">Search</Button>
          </Form>
      
      </Navbar>

    </div>
  )
}
