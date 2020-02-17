import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Nav, Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import logo from '../';







export const Formulaire = () => {

    return (
        <div>
                    <img src={logo} />


            <Form className="Formulaire" >

                <div class="row"> 
                    <input class="form-control" type="text" name="Titre" placeholder = "Titre" />
                    <span class="resultat"></span>
                </div>




                <div class="row">
                   
                    <input class="form-control" type="text" name="Auteur"  placeholder = "Auteur" />
                    <span class="resultat"></span>

                </div>


                <div class="row">
                {/* <input class="controle" type="text" name="Description"  placeholder = "Description" /> */}
                    <textarea class="form-control" rows="2" id="comment" placeholder = "Description" ></textarea>
                    <span class="resultat"></span>

                </div>

                <div class="row">
                  {/* <label for = "Categorie">Categorie</label> */}
                    


                    <DropdownButton className="mr-sm-2" variant="danger"
                        id="dropdown-basic-button" title="Catégorie">
                        <Dropdown.Item href="#/action-1">Western</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Aventure</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Humour</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Historique</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">SF</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Manga</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Fantastique</Dropdown.Item>
                    </DropdownButton>

                </div>

                <div class="row">

                   
                 
                    

                    <CKEditor


                        editor={ClassicEditor}

                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />


                </div>
                <Button variant="success">Creer</Button>
            </Form>


        </div>
    )


}