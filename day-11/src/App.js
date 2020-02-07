import React from 'react';
import { MoviesContainer } from './containers/movies/MoviesContainer';
import './App.scss';
import MovieForm from './components/MovieForm/MovieForm';
import MovieApi from './modules/movies';
import m from 'materialize-css';

function App() {

    m.AutoInit();

    //Create new movie
    const newMovie = async () => {
        let form = new MovieForm();
        form.showForm(true)
            .then((movieObject) => {
                if (movieObject !== null) {
                    new MovieApi().createMovie(movieObject)
                        .then((result) => {
                            
                        }).catch((err) => {
                            
                        });
                }                
            }).catch((formErr) => {
                console.log(formErr);
            });
    }

    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper purple darken-4">
                        <a href="#" className="brand-logo center"><i class="material-icons">movie</i>Dev.f</a>
                        <a onClick={newMovie.bind(this)} className="btn-floating btn-large waves-effect waves-light purple darken-1 right"><i className="material-icons">add</i></a>
                    </div>
                </nav>
            </div>            
            <br />
            <MoviesContainer />
        </div>       
    );
}

export default App;
