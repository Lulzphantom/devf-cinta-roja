import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navBar.scss';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed ">
                    <nav>
                        <div className="nav-wrapper purple darken-4 z-depth-4">
                            <Link to="/" className="brand-logo center"><i className="material-icons">movie</i>Dev.f Peliculas</Link>
                            <Link to="/addMovie" className="btn-floating btn-large waves-effect waves-light purple darken-1 right"><i className="material-icons">add</i></Link>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

