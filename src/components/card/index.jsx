import { React, useEffect } from 'react';
import {Content} from './styles';
import { useState } from 'react';
import { Link } from "react-router-dom";
import * as moment from 'moment';
import 'moment/locale/pt-br';
import notfound from '../../assets/img/img-not-found.png'

export default function Card(props) {
  const [ movie, setMovie ] =  useState();
  const [ image, setImage] = useState();

  useEffect(() => {
    setMovie(props)
  }, [props]);

  useEffect(() => {
    const thumb = props?.poster_path && 'https://image.tmdb.org/t/p/w500/' + props?.poster_path;
    setImage(thumb)
  }, [props]);

  return(
    <Content>
     <Link to={'/movie/' + movie?.id}>
        <div className="thumbnail">
          <img src={image ? image : notfound} alt={movie && movie.title ? movie.title : movie?.original_title} />
        </div>
        <div className="average">
          <span>{movie?.vote_average}</span>
        </div>
        <div className="title">{movie && movie.title ? movie.title : movie?.original_title}</div>
        <div className="release">Lançamento: { movie && movie.release_date ? moment(movie.release_date).locale('pt-br').format("LL") : null}</div>
      </Link>
    </Content>
  )
}