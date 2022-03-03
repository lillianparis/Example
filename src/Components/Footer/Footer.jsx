import React from 'react';
import "materialize-css";
import "../Footer/style.css";



function Footer() {
    return (

        <>
            <footer class="page-footer #f57c00 orange darken-2">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Tiffany's Crafts</h5>
                            <p class="grey-text text-lighten-4">Hours of Operation: Mon-Fri, 4:00pm - 6:00 pm</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Message Me</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Email</a></li>
                                {/* <h1>Email</h1> */}
                                <li><a class="grey-text text-lighten-3" href="#!">Etsy</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2022 Created By Lillian Paris
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;