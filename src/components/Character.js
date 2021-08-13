// Write your Character component here
import React from 'react'
import styled from 'styled-components';


const StyledMainDiv = styled.div`
   
    width: 50%
`;
const StyledChar= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0 4px 0;
    padding: 8px;
    text-align: center;
    text-shadow: 1px 1px 5px #fff;
`;


const Character = props => {
    const { char, openDetails } = props

    
    return (
        <StyledMainDiv>
            <StyledChar>
                {char.name}
                <button onClick={()=> openDetails(char.name)}>{char.birth_year}</button>
            </StyledChar>
        </StyledMainDiv>
    )
}

export default Character