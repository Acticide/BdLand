import React, { useState, useEffect } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { get, postJson, putFormData } from "../ApiService"


export const Formulaire = (props) => {
    const [categorie, setCategories] = useState([])
    const [bdId, setBdId] = useState(0)
    const [reload, setReload] = useState(true)
    const bd = {
        'titre': '',
        'bd_description': '',
        'categorieId': 0,
        'autheur': '',
        'date_post': '2020-02-02',
        'contenu': '',
        'bd_image': '',
    }

    useEffect(() => {
        get("categories").then(res => res.json()).then((response) => {
            setCategories(response);
        })
    }, [reload])

    const fieldChange = (event) => {
        bd[event.target.name] = event.target.value
    }

    const sendForm = (event) => {
        event.preventDefault()
        postJson("Bds", bd).then(res => res.json()).then((response) => {
            if (response.bdId > 0) {
                setBdId(response.bdId)
            }
            else {
                alert("erreur serveur")
            }
        })
    }

    const renderSelectCategorie = () => {
        return (
            <div className="row">
                <select onChange={fieldChange} name="categorieId" className="col form-control m-1">
                    <option>Catégories</option>
                    {categorie.map((cat, index) => <option key={index} value={cat.id}>{cat.categorie_type}</option>)}
                </select>
            </div>
        )
    }

    const renderForm = () => {
        return (
            <form onSubmit={sendForm} class="formAdd">
                <h1>Ajouter une BD</h1>
                <div className="row">
                    <input onChange={fieldChange} type="text" placeholder="Titre" className="col form-control m-1" name="titre" />
                </div>
                <div className="row">
                    <input onChange={fieldChange} type="text" placeholder="Auteur" className="col form-control m-1" name="autheur" />
                </div>
                {renderSelectCategorie()}
                <div className="row">
                    <textarea onChange={fieldChange} className="col form-control m-1" name="bd_description" placeholder="Résumé">

                    </textarea>
                </div>

                <div className="row">
                    <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}

                        name="contenu"
                    />
                </div>

                <div className="row">
                    <input type="file" onChange={fieldChange} className="file col form-control m-1" name="bd_image" />
                </div>

                <div className="row">
                    <button className="col btn form-control m-1" type="submit">Valider</button>
                </div>
            </form>
        )
    }

    return (
        <div className="container-fluid BgForm">
            {renderForm()}
        </div>
    )

}

export default Formulaire