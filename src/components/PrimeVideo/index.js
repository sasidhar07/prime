import {Component} from 'react'

import './index.css'
import MovieSlider from '../MoviesSlider'

export default class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="primeVideoImg"
        />
        <div className="card">
          <h1>Action Movies</h1>
          <MovieSlider moviesList={moviesList} category="ACTION" />
        </div>
        <div className="card">
          <h1>Action Movies</h1>
          <MovieSlider moviesList={moviesList} category="COMEDY" />
        </div>
      </div>
    )
  }
}
