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
    text-align: center;
    text-shadow: 1px 1px 5px #fff;
    border: 1.5px solid black;

    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: white;
        box-shadow: 1px 1px 5px #fff;
    }

    button {
        &:hover {
            transform: scale(1.2);
        }
      }
`;

const Character = props => {
    const { char, openDetails } = props

 
    return (
        <div>
            <StyledChar>
                {char.name}
               
                <button onClick={()=> openDetails(char)}>{char.birth_year}</button>
            
            </StyledChar>

        </div>
        
    )
}

export default Character