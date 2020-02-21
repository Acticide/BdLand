import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';



import '../App.css';
import '../css/fontawesome.css';
// Test 


export const Footer = () => {
    return (
        <footer>

            <div class="reseaux">
                <h1> Suivez nous sur : </h1>
                <ol>
                    <a href="https://www.facebook.com/"> <i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/?hl=fr"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.snapchat.com/l/fr-fr/"><i class="fab fa-snapchat"></i></a>
                    <a href="https://www.pinterest.fr/"><i class="fab fa-pinterest-square"></i> </a>
                    <a href="https://fr.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://slack.com/intl/fr-fr/"><i class="fab fa-slack"></i></a>
                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.twitch.tv/"><i class="fab fa-twitch"></i> </a>
                    <a href="https://twitter.com/login?lang=fr"><i class="fab fa-twitter"></i></a>
                </ol>
                <h2>Même si nous n'avons rien de tout cela !! </h2>
            </div>

            <p>© 2018 Gandalf , Gimly , Dúnadan  , Elrond</p>

        </footer>
    )
}