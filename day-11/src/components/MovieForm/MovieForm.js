import React, { Component } from 'react';
import Swal from 'sweetalert2';
import m from 'materialize-css';


export default class MovieForm extends Component {   
    
    datePickerClick = () => {
        var elem = document.querySelectorAll('.datepicker');
        var instance = m.Datepicker.getInstance(elem);
        instance.open();}
    
    showForm = async (newItem, title, description, image, director) => {

        const { value: formValues } = await Swal.fire({
            title: `${newItem === true ? 'Nueva pelicula' : 'Editar pelicula'}`,            
            html:
                '<div class="row">'+
                '<form class="col s12">'+
                '<div class="row">'+
                '<div class="input-field col s6">Titulo:'+
                `<input id="title" type="text" class="validate" value="${newItem === true ? '' : title}">`+
                '</div>'+
                '<div class="input-field col s6">Año:'+
                `<input type="text" class="datepicker">`+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="input-field col s12">Descripción:'+
                `<input id="description" type="text" class="validate"  value="${newItem === true ? '' : description}">`+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="input-field col s12">Tema:'+
                '<select>'+
                '<option value="" disabled>Choose your option</option>'+
                '<option value="1" selected>Accion</option>'+
                '<option value="2">Comedia</option>'+
                '<option value="3">Drama</option>'+
                '<option value="3">Infantil</option>'+
                '<option value="3">Terror</option>'+
                '</select>'+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="input-field col s12">URL de Imagen:'+
                `<input id="image" type="text" class="validate"  value="${newItem === true ? '' : image}">`+
                '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="input-field col s12">Director:'+
                `<input id="director" type="text" class="validate"  value="${newItem === true ? '' : director}">`+
                '</div>'+
                '</div>'+                
                '</form>'+
                '</div>',
            focusConfirm: false,
            confirmButtonText: `${newItem === true ? 'Crear pelicula' : 'Guardar pelicula'}`,
            confirmButtonColor: '#6a1b9a',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            preConfirm: () => {
                return {
                    title: document.getElementById('title').value,
                    description: document.getElementById('description').value,
                    image: document.getElementById('image').value,
                    director: document.getElementById('director').value
                }
            }
        })          
        if (formValues) {
            return formValues;
        }
        return null;
    }  
    

    render() { 
        return (
            <div>
                <div id="modal1" class="modal">
                    <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}
