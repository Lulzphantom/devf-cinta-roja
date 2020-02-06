import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import requestPromise from 'request-promise'

export const MoviesContainer = () => {

    //Get movies from API
    
    const getMoviesPromise = () => {
        var options = {
            method: 'GET',
            uri: 'https://devf-movies.herokuapp.com/api/v1/getMovies',          
            json: true        
        };        
        return requestPromise(options).promise();
    }

    const movies = () => {        
        console.log('test');
        getMoviesPromise()
            .then((result) => {
                return <h1>{result}</h1>
            }).catch((err) => {
                console.log(err);
                return <h2>{err}</h2>
            });
    }

    return (
        <div>
            <h1>Contenedor de peliculas</h1>
            <section>
                <div className="row">
                    {movies()}
                    <MovieCard 
                        image="https://pbs.twimg.com/media/EPAPGw8WAAAgDQs.jpg"
                        title="Devf"
                        description="Lorem ipsum dolor"
                        director="Test"
                        theme="Accion"
                    />    
                </div>
            </section>
        </div>
    )
}

