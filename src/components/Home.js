import React from 'react';

/* Import components */
import Header from './Header';

/* Import css */
import '../css/Home.css';

/* Import img */
import profilePicture from '../img/profile_picture.png';

function Home() {
    return (
        <div>
            <Header />
            <p>This is my home page.</p>
            <img src={profilePicture} class="home-img" alt="Logo" />
        </div>
    )
}

export default Home;