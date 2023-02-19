import React from 'react'
import styled,{ keyframes } from 'styled-components';

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    cursor:pointer;
    &:hover {
        box-shadow: 0 3px 10px 0 #aaa;
    }
`;

const  CoverImage = styled.img`
    // object-fit: cover;
    height: 362px;
`;

const MovieName = styled.div`
    font-size: 17px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 600;
    color: black;
`;

const tag = keyframes`
    0% { transform: translateX(50%); }
    100% { transform: translateX(-50%); }
`;

const Wrapper = styled.div`
    position: relative;
    // line-height: nowrap;
    animation: ${tag} 3s linear infinite alternate;
`;

const MovieComponent = (props) => {
    const {Title, Year, imdbID, Type, Poster} = props.movie;
    return (
        <MovieContainer onClick={() => props.onMovieSelect(imdbID)}>
            <CoverImage src={Poster}/>
            <MovieName>   
                <Wrapper>{Title}</Wrapper>
            </MovieName>        
            <InfoColumn>
                    <span>Year: {Year}</span>
                    <span>Type: {Type}</span>
            </InfoColumn>
        </MovieContainer>
    );
}
export default MovieComponent