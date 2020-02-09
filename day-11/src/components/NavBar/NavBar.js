import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed ">
                    <nav>
                        <div className="nav-wrapper purple darken-4 z-depth-4">
                            <a href="#" className="brand-logo center"><i class="material-icons">movie</i>Dev.f Peliculas</a>
                            <Link to="/addMovie" className="btn-floating btn-large waves-effect waves-light purple darken-1 right"><i className="material-icons">add</i></Link>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

