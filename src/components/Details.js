import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Details = props => {
    const { charId, close } = props
    const [details, setDetails] = useState(null)
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${charId}`)
        .then(res => {
            setDetails(res.data)
        })
        return () => console.log('cleaning')
    }, [charId])

    

    return (
        <div>
            <h2>details of {details.name}</h2>
        </div>
    )
}

export default Details