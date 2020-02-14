import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



export const Formulaire = () => {
    
    return (
        <div>

            <form>

                <div class="row">
                    <label class="label">Titre :</label>
                    <input class="controle" type="text" name="Titre" />
                    <span class="resultat"></span>
                </div>




                <div class="row">
                    <label for="Auteur"> Auteur :</label>
                    <input class="controle" type="text" name="Auteur" />
                    <span class="resultat"></span>

                </div>


                <div class="row">
                    <label for="Description"> Description :</label>
                    <input class="controle" type="text" name="Description" />
                    <span class="resultat"></span>

                </div>

                <div class="row">
                    <label for="Categorie"> Categorie :</label>

                    <select name="Categorie" >
                        <option>Action</option>
                        <option>Humour</option>
                        <option>Historique</option>
                        <option>Manga</option>
                        <option>Science fiction</option>
                    </select>
                </div>


                <div class="row">
                    <label for="FormulaireModif"> Formulaire Modif :</label>
                    <select name="FormulaireModif" >
                        <option>Ajouter une oeuvre</option>
                        <option>Supprimer une oeuvre</option>
                        <option>Modifier oeuvre</option>
                        <a class="btn btn-primary" href="#" role="button">Link</a>
                        
                    </select>
                </div>



            
                
                <label for="Contenu"> Contenu  :</label>

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

            </form>




        </div>
        )
    

}