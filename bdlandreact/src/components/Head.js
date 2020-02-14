import React from 'react'
import {Nav,Navbar,Form,FormControl,Button,Dropdown,DropdownButton} from 'react-bootstrap'

export const Head = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">BdLand</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
    <DropdownButton className="mr-sm-2" id="dropdown-basic-button" title="Genre">
        <Dropdown.Item href="#/action-1">Western</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Aventure</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Humour</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Historique</Dropdown.Item>
        <Dropdown.Item href="#/action-2">SF</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Manga</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fantastique</Dropdown.Item>
    </DropdownButton>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    
  </Navbar>
  
        </div>
    )
}
