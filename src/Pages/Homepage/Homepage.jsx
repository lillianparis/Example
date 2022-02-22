import React from 'react';
import Parallax1 from "../Images/parallax1.jpg"


const Homepage = () => {
    return (
        <>
            <h1>Helllloooo Worlllldddd</h1>
            <div class="parallax-container">
                <div class="parallax"><img src={Parallax1}/></div>
            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">Parallax</h2>
                    <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={Parallax1}/></div>
            </div>
        </>
    )
}

export default Homepage;