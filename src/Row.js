import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

let Row = function ({ title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    //when row loads, i want to make a request to tdmb to load movies

    // console.clear()
    console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {/* several row posters */}
                {movies.map(movie => (
                    // <p>{movie.title}</p>
                    <img key = {movie.id} className = {`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
                ))}
            </div>
        </div>
    )
}

export default Row