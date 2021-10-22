import React, {useState} from 'react'

let Row = function( {title} ){
    const [movies, setMovies] = useState([])
    return (
        <div>
            <h2>{ title }</h2>
            {/* containers inside */}
        </div>
    )
}

export default Row