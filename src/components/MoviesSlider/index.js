import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList, category} = props
  const settings = {
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(each => {
        if (each.categoryId === category) {
          return <MovieItem eachItem={each} />
        }
        return ''
      })}
    </Slider>
  )
}

export default MovieSlider
