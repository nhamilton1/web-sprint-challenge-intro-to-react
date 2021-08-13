// Write your Character component here
import React from 'react'
import styled from 'styled-components';

const StyledChar= styled.div`

width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin: 4px 0 4px 0;
padding: 8px;
`;


const Character = props => {
    const { char, openDetails } = props

    
    return (
        <StyledChar>
            {char.name}
            <button onClick={()=> openDetails(char.name)}>{char.birth_year}</button>
        </StyledChar>
    )
}

export default Character