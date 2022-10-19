import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        {
          this.props.movies && this.props.movies.map (movie => 
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                {movie.title}
                
              </Link>
              <button 
                style={{marginLeft : '20px', cursor:'pointer'}}
                onClick={() => this.props.removeMovieFavorite(movie.id)}
              >
                X
              </button>
            </li>
          )
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies : state.moviesFavourites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite : value => dispatch(removeMovieFavorite(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
