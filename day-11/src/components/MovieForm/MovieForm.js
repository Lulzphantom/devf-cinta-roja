import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import M from 'materialize-css';
import { useParams } from 'react-router-dom';


export default class MovieForm extends Component {   

    componentDidMount() {
        M.AutoInit();
    }
    
    state = {
        id : '',
        title : '',
        year : 2000,
        description : '',
        image : '',
        theme : '',
        director: ''
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submit(state) {       

        axios.post("https://cinta-roja32.herokuapp.com/api/v1/pelicula", state)
            .then(data => {
                Swal.fire("Película guardada", "", "success")                
                    .then(() => {
                        window.location.assign('/');
                    });
            })
            .catch(err => {
                Swal.fire("Error al registrar película", "", "error");
            })
    }

    render() {

        this.state = this.props;

        return (
            <div>
                <form>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input value={this.state.title} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Año</label>
                        <input value={this.state.year} onChange={this.handleChange.bind(this)} type="number" className="form-control" id="year" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input value={this.state.description} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Liga portada</label>
                        <input value={this.state.image} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="liga">Género</label>
                        <select value={this.state.theme} onChange={this.handleChange.bind(this)} className="custom-select" id="theme">
                            <option value="drama">drama</option>
                            <option value="acción">acción</option>
                            <option value="comedia">comedia</option>
                            <option value="terror">terror</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="director">Director</label>
                        <input value={this.state.director} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="director" />
                    </div>
                    <div onClick={() => this.submit(this.state)} className="btn btn-primary">Agregar</div>
                </form>
                <br />
            </div>
        )
    }
}
