import React, { Component } from 'react';
import Swal from 'sweetalert2';
import './movieCard.scss';


export default class MovieCard extends Component {     

    edit = () => {
        Swal.fire('Any fool can use a computer');
    }  


    deleteMovie = (movieId, movieTitle) => {
        Swal.fire({
            title: `Desea eliminar ${movieTitle}?`,
            text: "Se eliminara la pelicula de forma permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    render() {

        const {id, title, year, description, image, theme, director} = this.props;
        return (
            <div>
                <div className="col s12 m2">
                        <div className="card">
                            <div className="card-image">
                                <img src={image} alt="movie"/>
                                <span className="card-title">{title}</span>
                                <a onClick={this.edit} className="btn-floating halfway-fab waves-effect waves-light orange darken-3"><i class="material-icons">edit</i></a>
                            </div>
                            <div className="card-content">
                                <p><strong>Descripcion:</strong> {description}</p><br></br>    
                                <p><strong>Año:</strong> {year}</p>
                                <p><strong>Director:</strong> {director}</p>
                                <p><strong>Tema:</strong> {theme}</p>                   
                            </div>
                            <div className="card-action center">
                                    <button onClick={this.deleteMovie.bind(this, id, title)} class="btn waves-effect waves-light orange darken-3" type="submit" name="action">Eliminar
                                        <i class="material-icons right">delete</i>
                                    </button>                                
                            </div>                   
                        </div>
                </div> 
            </div>
        )
    }
}
