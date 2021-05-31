import { React, useEffect } from 'react';
import { Container} from './styles';
import Card from '../card';
import { useState } from 'react';

export default function Movies (props) {
  const [ datacards, setDataCards ] =  useState([]);

  useEffect(() => {
    setDataCards(props);
  }, [props]);

  return (
    <Container>
      {
        datacards.movies?.total_results > 0 
        ?
        datacards.movies.results.map(movie => {
          return <Card key={movie.id} {...movie}/>
        })
        : 
        <h3>Sem resultados disponíveis.</h3>
      }
    </Container>
  )
}