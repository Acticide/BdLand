import React from 'react'
import {Nav,Navbar,Form,FormControl,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import img1 from './Media/image1.png'
export const Head = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">  
    <img className ="logo"src={img1}/>
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
  <h1>Administrateur</h1>
  <form class="form-inline">
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Email</label>
          <input type="text" readonly class="form-control" id="staticEmail2" placeholder="Blabla@gmail.com"/>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Connexion</button>
      </form>
        </div>
    )
}
