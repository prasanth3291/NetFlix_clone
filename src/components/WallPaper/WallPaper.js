import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Pages/constants'
import axios from '../../Pages/axios'
import './WallPaper.css'

function WallPaper() {

    const [movies, setMovies] = useState([])
    const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results)

            const randomIndex = Math.floor(Math.random() * response.data.results.length)
            setRandomIndex(randomIndex);
        })
    }, [])

    const movie = movies[randomIndex];

    return (
        <div 
        style={{
            backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`
        }}
            className='wallpaper'>
                <div className='content1' >
                    <h1 className='title1'>{movie ? movie.title : ''}</h1>
                    <div className='banner_buttons' >
                        <button className='button' >Play</button>
                        <button className='button' >My list</button>
                    </div>
                    <h1 className='description1'>{movie ? movie.overview : ''}</h1>
                </div>
            <div className="fade_bottom1"></div>
            </div>
    )
}

export default WallPaper
