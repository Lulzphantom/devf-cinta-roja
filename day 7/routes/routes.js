const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

const apiMainRoute = '/api/v1';

// Basic response
router.get('/', (request, response) => {
    response.status(200).send('server arriba');
});

// Create
router.post(`${apiMainRoute}/CreateMovie`, (request, response) => {
    
    const {title, year, description, image, theme, director} = request.body;
        
    const newMovie = new Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });

    newMovie.save((err, movie) => {
        err 
        ? response.status(409).send(err) 
        : response.status(201).send(movie._id)
    });

});

// Read
router.get(`${apiMainRoute}/getMovies`, (request, response) => {
    Movie.find((err, res) => {
        err
        ? response.status(404).send(err)
        : response.status(200).send(res)
    });  
});

//
router.get(`${apiMainRoute}/getMovieById`, (request, response) => {
    const {id} = request.query;
    Movie.findById(id, (err, res) => {
        err
        ? response.status(404).send(err)
        : response.status(200).send(res)
    });  
});

// Update movie by id
router.put(`${apiMainRoute}/updateMovieById`, (request, response) => {
    
    const {id} = request.query;
    const {title, year, description, image, theme, director} = request.body;
    
    if (Object.keys(request.body).length !== 6) {
        response.status(400).send('Bad request');
        console.log('object');
    }

    const updatedMovie = new Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });

    Movie.findByIdAndUpdate(id, updatedMovie, (err, res) => {
        err
        ? response.status(304).send(err)
        : response.status(202).send(res._id)
    });
});


// patch movie by id
router.patch(`${apiMainRoute}/patchMovieById`, (request, response) => {
    
    const {id} = request.query;
    const {title, year, description, image, theme, director} = request.body;
    
    if (Object.keys(request.body).length > 0 && Object.keys(request.body).length <= 6) {
        response.status(400).send('Bad request');
    }

    const updatedMovie = new Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });

    Movie.findByIdAndUpdate(id, updatedMovie, (err, res) => {
        err
        ? response.status(304).send(err)
        : response.status(202).send(res._id)
    });
});

module.exports = router;