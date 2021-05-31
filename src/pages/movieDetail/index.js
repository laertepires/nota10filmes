import { React, useEffect, useState } from 'react';
import { Main } from './styles';
import api from '../../services/api';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { API_KEY } from '../../config/';

export default function MovieDetail() {
  const [movie, setMovie ] = useState({});
  let { id } = useParams();

  useEffect(() => {
    api.get(`movie/${id}?api_key=${API_KEY}&language=pt-BR`).then(response => {
      setMovie(response);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main background={movie.backdrop_path && `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}>
      <div className="overlay"></div>
      <div className="container">
        <h1>{movie?.title}</h1>
        <h2>{movie.vote_average}</h2>
        <div>{ moment(movie.release_date).format('YYYY')} | {movie.runtime} min</div>
        
        <div className="genres">
          {movie?.genres && movie.genres.map((genre, i) => { 
              return <span key={genre.id}> {genre.name}{i !== movie.genres.length - 1 && ','} </span>
            })
          }
        </div>
        <div>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </Main>
  )
}