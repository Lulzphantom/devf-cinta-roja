import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'

export const MoviesContainer = () => {
    return (
        <div>
            <h1>Contenedor de peliculas</h1>
            <section>
                <div className="row">
                    <MovieCard 
                        image="https://pbs.twimg.com/media/EPAPGw8WAAAgDQs.jpg"
                        title="Devf"
                        description="Lorem ipsum dolor"
                        director="Test"
                        theme="Accion"
                    />    
                </div>
            </section>
        </div>
    )
}

