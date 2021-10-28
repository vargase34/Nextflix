import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

let Row = function ({ title, fetchUrl }) {
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
                {movies.map(movie => (
                    // <p>{movie.title}</p>
                    <img className = 'row__poster' src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                ))}
            </div>

            {/* several row posters */}
            {/* Check if movies exists */}
        </div>
    )
}

export default Row