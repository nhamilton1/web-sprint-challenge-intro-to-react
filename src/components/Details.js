import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';




const StlyedDetail = styled.div`
    text-shadow: 1px 1px 5px #fff;
`;


const Details = props => {
    const { charId, close } = props
    const [details, setDetails] = useState(null)
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1`)
        .then(res => {
            setDetails(res.data)
            console.log(res.data)
        })
        return () => console.log('cleaning')
    }, [charId])


    return (
        <StlyedDetail>
            
            {
                details &&
                <>
                <h2>Details of {details.name}</h2>
                <p>Height: {details.height}</p>
                <p>mass: {details.mass}</p>
                <p>hair color: {details.hair_color}</p>
                <p>eye color: {details.eye_color}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </StlyedDetail>
    )
}

export default Details