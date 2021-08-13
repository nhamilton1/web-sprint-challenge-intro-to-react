import styled from 'styled-components';

const StlyedDetail = styled.div`
    color: white;
    text-shadow: 2px 5px 5px black;
`;


const Details = props => {
    const { charId, close } = props


    return (
        <StlyedDetail>
                <h2>Details of {charId.name}</h2>
                <p>Height: {charId.height}</p>
                <p>mass: {charId.mass}</p>
                <p>hair color: {charId.hair_color}</p>
                <p>eye color: {charId.eye_color}</p>
            <button onClick={close}>Close</button>
        </StlyedDetail>
    )
}

export default Details