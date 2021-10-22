import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'

let Row = function ({ title, fetchUrl }){
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request)
            return request
        } 
        fetchData()
    }, []) 

    //when row loads, i want to make a request to tdmb to load movies

    return (
        <div>
            <h2>{ title }</h2>
            {/* containers inside */}
        </div>
    )
}

export default Row