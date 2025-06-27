import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { useContext } from 'react'
import movieContext from '../contexts/movieContext'

const Hero = () => {

    const getMovie = useContext(movieContext)
    // console.log(movies)
    return (
        <>
            <Carousel>
                {
                    getMovie.movies.map((movie, index) => {
                        return (
                            <Paper key={index}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                        <div className='movie-detail'>
                                            <img src={movie.poster} alt='' />
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    }
                    )
                }
            </Carousel>
        </>
    )
}


export default Hero