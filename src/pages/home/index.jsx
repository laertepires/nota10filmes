import { React, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Banner from '../../components/banner';
import Movies from '../../components/movies';
import api from '../../services/api';
import { orderDesc } from '../../helpers/utils';

export default function Home() {
  const [genres, setGenres ] = useState([]);
  const [movies, setMovies ] = useState([]);


  //get movies by trend
  const getByTrend = () => {
    api.get(`/trending/movie/week?api_key=${ process.env.REACT_APP_API_KEY }&sort_by=vote_average.desc&language=pt-BR`).then(response => {

      const result = orderDesc(response);
      setMovies(result);
    });
  }

  // GET gender sidebar
  useEffect(() => {
    api.get(`/genre/movie/list?api_key=${ process.env.REACT_APP_API_KEY }&language=pt-BR`).then(response => {
      setGenres(response.genres);
    });
  }, []);

  // Get popular of the week
  useEffect(() => {
    getByTrend();
  }, []);

  // search movie
  const search = (query) => {
    api.get(`/search/movie?api_key=${ process.env.REACT_APP_API_KEY }&query=${query}&sort_by=vote_average.desc&with_genres=28&language=pt-BR&page=1&include_adult=true`).then(response => {
      const result = orderDesc(response);
      setMovies(result);
    });
  }

  // get movies by gender
  const getByGenre = (genre) => {
    api.get(`/discover/movie?api_key=${ process.env.REACT_APP_API_KEY }&sort_by=vote_average.desc&with_genres=${genre}`).then(response => {
      const result = orderDesc(response);
      setMovies(result);
    });
  }

  return (
    <main>
      <div className="left-content">
        <Sidebar 
          genres={genres} 
          onSearch={search} 
          onGetByGenre={getByGenre}
          onGetByTrend={getByTrend}/>
      </div>
      <div className="right-content">
        <Banner/>
        <Movies movies={movies}/>
      </div>
    </main>
  )
}