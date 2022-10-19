import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){ //didMount se ejecuta cuando se renderiza el componente por primera vez
        const movieID = this.props.match.params.id;  // agarramos el id que lo renderizamos en la URL 
        this.props.getMovieDetail(movieID);  // lo pasamos al acction getMovieDetail para traer detalles de ese ID
    }

    render() {
        const {Title,Poster} = this.props.data //destructuring
        return (
            <div className="movie-detail">
                Detalle de la pelicula 
                <h1>{Title}</h1>
                <img src={Poster}/>
            </div>
        );
    }
}

//nos pasamos los estados por props.data
const mapStateToProps = (state) => {
    return{
        data : state.movieDetail
    }
}

//ejecutamos la accion para traer el movie con un id especifico
const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetail : id => dispatch(getMovieDetail(id)),
    }
}

// traemos los estados de la store y las acciones y luego renderizamos un nuevo componente Movie
export default connect(mapStateToProps,mapDispatchToProps)(Movie);