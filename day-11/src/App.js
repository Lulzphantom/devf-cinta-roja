import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MoviesContainer } from './containers/movies/MoviesContainer';
import './App.scss';
import MovieForm from './components/MovieForm/MovieForm';
import MovieApi from './modules/movies';
import m from 'materialize-css';
import NavBar from './components/NavBar/NavBar';

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
            <BrowserRouter>
            <NavBar/>
            <br/>
            <Route exact path="/" component={MoviesContainer}/>
            <Route exact path="/addMovie" component={MoviesContainer}/>
            </BrowserRouter>
            
        </div>       
    );
}

export default App;
