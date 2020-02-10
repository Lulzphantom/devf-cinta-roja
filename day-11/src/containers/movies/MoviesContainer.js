import React, {useState, useEffect} from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieApi from '../../modules/movies';
import './moviesContainer.scss';

export const MoviesContainer = () => {

    //Get movies from API
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieRequest = new MovieApi().getAllMovies();
        movieRequest
            .then((movies) => {
                setMovies(movies.data)
            }).catch((err) => {
                setMovies([])
            });
    }, []);

    return (
        <div>
            <section>
                <div className="row mContainer">
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

