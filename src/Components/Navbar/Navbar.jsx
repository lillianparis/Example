import React from 'react';
import "materialize-css";
import "../Navbar/style.css";

function Navbar() {
    return (
        <>

            <nav>
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">About Me</a></li>
                        <li><a href="badges.html">Crafts</a></li>
                        <li><a href="collapsible.html">Contact</a></li>
                        {/* <li><a href="mobile.html">Mobile</a></li> */}
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">About Me</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </>
    )
}

export default Navbar;