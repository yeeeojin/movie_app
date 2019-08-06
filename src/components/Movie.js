// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Movie.css';

// class Movie extends Component {
//   static propTypes = {
//     // props의 type과 required 체크 가능
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.array.isRequired,
//     synopsis: PropTypes.string.isRequired,
//   }
//   render () {
//     return (
//       <div className="Movie">
//         <MoviePoster poster={ this.props.poster } />
//         <h1>{ this.props.title }</h1>
//       </div> 
//     );
//   }
// }
// class MoviePoster extends Component {
//   static propTypes = {
//     // props의 type과 required 체크 가능
//     poster: PropTypes.string.isRequired
//   }
//   render () {
//     return (
//       <img src={ this.props.poster } alt="Movie Poster" />
//     );
//   }
// }
// state 없고 function render 없고 lifecycle 없고 props와 태그 return만 있을 때 function으로
function Movie ({ title, poster, genres, synopsis }) {
  return (
    <div>
        <div className="Movie_Columns">
          <MoviePoster poster={ poster } alt={ title } />
        </div>
        <div className="Movie_Columns">
          <h1>{ title }</h1>
          <div className="Movie_Genres">
            { genres.map((genre, index) => <MovieGenre genre={ genre } key= { index } />) }
          </div>
          <p className="Movie_Synopsis">
            { synopsis }
          </p>
        </div>
    </div>
  )
}
function MoviePoster ({ poster, alt }) {
  return (
    <img src={ poster } alt={ alt } title={ alt } className="Movie_Poster" />
  )
}

function MovieGenre ({ genre }) {
  return (
    <span className="Movie_Genre">{ genre }</span>
  )
}

Movie.propTypes = {
  // props의 type과 required 체크 가능
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  // props의 type과 required 체크 가능
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
  // props의 type과 required 체크 가능
  genre: PropTypes.string.isRequired
}

export default Movie;
