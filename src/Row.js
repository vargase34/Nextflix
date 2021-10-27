import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'

let Row = function ({ title, fetchUrl }){
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
         
            console.log(request.data.results)
            setMovies(request.data.results)
            return request
        } 
        fetchData()
    }, [fetchUrl]) 

    console.log(movies)

    //when row loads, i want to make a request to tdmb to load movies

    return (
        <div>
            <h2>{ title }</h2>
            {/* containers inside */}
            {/* <h1>{ data.results }</h1> */}
        </div>
    )
}

export default Row