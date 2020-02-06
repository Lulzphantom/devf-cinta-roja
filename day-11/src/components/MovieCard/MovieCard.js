import React, { Component } from 'react';
import './MovieCard.css';

export default class MovieCard extends Component {

    movieCards = () => {
        let movies = [];

        for (let i = 0; i < 10; i++) {
            movies.push(
                <div className="col s12 m2">
                        <div className="card">
                            <div className="card-image">
                                <img src={this.props.image} alt="movie"/>
                                <span className="card-title">{this.props.title}</span>
                            </div>
                            <div className="card-content">
                                <p> {this.props.description}</p>                       
                            </div>
                            <div className="card-action">
                                <p> {this.props.director}</p>
                                <p> {this.props.theme}</p>
                            </div>
                        </div>
                </div> 
            );
        }

        return movies;
    }

    render() {
        return (
            <div>
                {this.movieCards()}
            </div>
        )
    }
}
