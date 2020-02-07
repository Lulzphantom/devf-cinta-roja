import React, {useState, useEffect} from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import axios from 'axios';

export const MoviesContainer = () => {

    //Get movies from API
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://devf-movies.herokuapp.com/api/v1/getMovies')
            .then((movies) => {
                setMovies(movies.data)
            }).catch((err) => {
                setMovies([])
            });
    }, []);

    return (
        <div>
            <section>
                <div className="row">
                    {movies.map(movie => (
                        <MovieCard 
                        id={movie._id}
                        image={movie.image}
                        title={movie.title}
                        description={movie.description}
                        director={movie.director}
                        theme={movie.theme}
                        year={movie.year}
                        />
                    ))}
                        
                </div>
            </section>
        </div>
    )
}

