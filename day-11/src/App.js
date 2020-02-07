import React from 'react';
import { MoviesContainer } from './containers/movies/MoviesContainer';
import './App.scss';

function App() {
  return (
    <div>
      <nav>      
        <div className="nav-wrapper blue orange">
          <a href="#" className="brand-logo center">Dev.f Peliculas</a>          
          <a className="btn-floating btn-large waves-effect waves-light orange darken-3 right"><i className="material-icons">add</i></a>
        </div>        
      </nav>
      <br/>      
      <MoviesContainer/>  
    </div>    
  );
}

export default App;
