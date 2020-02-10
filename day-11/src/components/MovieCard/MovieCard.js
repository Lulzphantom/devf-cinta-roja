import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './movieCard.scss';
import MovieForm from '../MovieForm/MovieForm';
import MovieApi from '../../modules/movies';
import m from 'materialize-css';



export default class MovieCard extends Component {     

    componentDidMount(){
        m.AutoInit();
    }
    // Edit movie
    edit = async (id, title, description, image, director) => {
        let editForm = new MovieForm();
        editForm.showForm(false, title, description, image, director)
            .then((movieObject) => {
                if (movieObject !== null) {
                    new MovieApi().editMovie(id, movieObject)
                        .then((result) => {
                            
                        }).catch((err) => {
                            Swal.fire(
                                'Error!',
                                `${err}`,
                                'error'
                            );
                        });
                } 
            }).catch((err) => {
                
            });
    }  

    // Delete movie
    delete = (movieId, movieTitle) => {
        Swal.fire({
            title: `Desea eliminar ${movieTitle}?`,
            text: "Se eliminara la pelicula de forma permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6a1b9a',
            confirmButtonText: 'Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Result Alerts
                new MovieApi().deleteMovie(movieId)
                    .then((result) => {
                        Swal.fire(
                            'Eliminada!',
                            'La pelicula fue eliminada.',
                            'success'
                        );
                    }).catch((err) => {
                        console.log(err);
                        Swal.fire(
                            'Error!',
                            `${err}`,
                            'error'
                        );
                    });
                
            }
        })
    }

    render() {

        var controlColor = 'purple darken-1';

        const {id, title, year, description, image, theme, director} = this.props;
        
        return (
            <div>
                <div className="col s12 m6 l3">
                        <div className="card z-depth-5">
                            <div className="card-image">
                                <img className="cardimg" src={image} alt="movie"/>
                                <div className="card-title">
                                {title}
                                </div> 
                                <Link to={`/editMovie/${id}`} className={`btn-floating halfway-fab waves-effect waves-light ${controlColor}`}>
                                    <i className="material-icons">edit</i>
                                </Link>
                            </div>
                            <div className="card-content">
                                <p title={description}><strong>Descripcion:</strong> {description}</p><br></br>    
                                <p><strong>Año:</strong> {year}</p>
                                <p><strong>Director:</strong> {director}</p>
                                <p><strong>Tema:</strong> {theme}</p>                   
                            </div>
                            <div className="card-action center">
                                    <button onClick={this.delete.bind(this, id, title)} className={`btn waves-effect waves-light ${controlColor}`} type="submit" name="action">Eliminar
                                        <i className="material-icons left">delete</i>
                                    </button>                                
                            </div>                   
                        </div>
                </div> 
            </div>
        )
    }
}
