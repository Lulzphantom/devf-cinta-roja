import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MovieForm from '../../components/MovieForm/MovieForm';
import MovieApi from '../../modules/movies';

export const FormContainer = () => {

    const {movieId} = useParams();

     //Get movie from API
    const [movie, SetMovie] = useState([]);

    useEffect(() => {
        let movieRequest = new MovieApi().getMovieById(movieId);
        movieRequest
            .then((movie) => {
                SetMovie([movie.data])
            }).catch((err) => {
                SetMovie([])
            });
    }, []);

    return (
        <div className="container">
            {movieId != null ? 
            movie.map(data => (
                <MovieForm 
                    id={data._id}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    director={data.director}
                    theme={data.theme}
                    year={data.year}
                />
            )) :            
            <MovieForm/>}        
            
        </div>
    )
}
