import React, {Component} from 'react';
import "materialize-css";
import "../Navbar/style.css";
import M from "materialize-css";

export class Navbar extends Component {
    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
            instances();
        })
    }
    render() {
        return (
            <>

                <nav>
                    <div class="nav-wrapper #f57c00 orange darken-2">
                        <a href="#!" class="brand-logo">Tiffany's Crafts</a>
                        <a href="#Navbar" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">About</a></li>
                            <li><a href="badges.html">Crafts</a></li>
                            <li><a href="collapsible.html">How to</a></li>
                            <li><a href="mobile.html">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    <li><a href="sass.html">About Me</a></li>
                    <li><a href="badges.html">Crafts</a></li>
                    <li><a href="collapsible.html">How to</a></li>
                    <li><a href="mobile.html">Contact</a></li>
                </ul>
            </>
        )
    }
}

export default Navbar;