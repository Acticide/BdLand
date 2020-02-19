import React, { Component } from 'react'
import CarrouselMenu from './CarrouselMenu';
import CarrouselMenu2 from './CarrouselMenu2';

export const Home = () => (
    <div class="container-fluid">
        <div class="carrou">
            <CarrouselMenu/>
            <CarrouselMenu2/>
        </div>
    </div>
)

export default Home