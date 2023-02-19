import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from './components/MovieComponent';
import Axios from 'axios';
import MovieInfoList from './components/MovieInfoList';
import Footer from './components/Footer';

export const API_KEY = "f494a764";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 17px;
  z-index: 1;
  justify-content: center;
  box-shadow: 0 3px 6px 0 #555;
`;

const Searchbox = styled.div`
  overflow: hidden;
  padding: 20px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  padding: 30px;
  justify-content: space-evenly;
`;

const MovieImage = styled.img`
  width: 475px;
  height: 35px;
`;

const Input = styled.input`
  padding: 12px 20px;
`;

function App() {
  const [search, setSearch] = useState();
  const [timeoutId, setTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const fetchData = async (searchString) => {
    try {
      const response = await Axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
      );
      updateMovieList(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setSearch(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeoutId(timeout);
  };
  
  return (
    <div>
      <Header className='App'>
        <MovieImage src='/logoName.png'></MovieImage>
      </Header>
      <Searchbox>
        <Input type='text' placeholder='Search Movies' value={search} onChange={onTextChange}></Input>
      </Searchbox>
      {
        selectedMovie && <MovieInfoList selectedMovie={selectedMovie}
        onMovieSelect = {onMovieSelect}/>
      }
      <MovieList>
        {
          movieList?.length ? movieList.map((movie, index) => <MovieComponent key = {index} movie = {movie} onMovieSelect = {onMovieSelect}/>) : "Type in the Search"
        }
      </MovieList>
      <Footer/>
    </div>
  );
}

export default App;
