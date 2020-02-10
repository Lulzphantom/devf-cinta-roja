import axios from 'axios';
const movieApiUrl = 'https://devf-movies.herokuapp.com/api/v1';

export default class MovieApi{
    // Create new movie
    createMovie = (movieObject) => {
        return axios.post(`${movieApiUrl}/CreateMovie`, movieObject);
    }

    // Get all movies
    getAllMovies = () => {
        return axios.get(`${movieApiUrl}/getMovies`);
    }

    getMovieById = (movieId) => {
        return axios.get(`${movieApiUrl}/getMovieById?id=${movieId}`);
    }

    // Edit movie
    editMovie = (movieId, movieObject) => {
        return axios.patch(`${movieApiUrl}/patchMovieById?id=${movieId}`, movieObject);
    }

    // Delete
    deleteMovie = (movieId) => {
        return axios.delete(`${movieApiUrl}/deleteMovieById?id=${movieId}`);
    }
}



