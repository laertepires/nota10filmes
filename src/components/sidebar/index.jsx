import { React } from 'react';
import {Container} from './styles.js';
import logo from '../../assets/img/logo.png';
import { useState } from 'react';

export default function Sidebar (props) {
  const [textsearch, setTextSearch ] = useState('');
  const [oppened, setOppened ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(textsearch);
  }

  const handleChange = (event) => {
    setTextSearch(event.target.value);
  }

  const onGetByGenre = (data) => {
    setOppened(!oppened); 
    props.onGetByGenre(data);
  }

  const onGetByTrend = (data) => {
    setOppened(!oppened); 
    props.onGetByTrend(data);
  }
  const toggleGender = () => {
    setOppened(!oppened);
  }


  return (
    <Container>
       <div className="logo">
          <img src={logo} alt="Nota10Filmes" />
      </div>
        <form onSubmit={handleSubmit}>
          <div className="search">
              <input type="text" onChange={(event) => handleChange(event)} placeholder="Buscar Filme" />
              <input type="submit" value=""/>
          </div>
          <div className="btn-open" onClick={() => toggleGender()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </form>
      <div className={ oppened ? 'categories show' : 'categories'}>
        <button className="close" onClick={() => toggleGender()}></button>
        <ul>
          <li onClick={() => onGetByTrend()}>Tendências Semanais</li>
          {props.genres.map(gender => {
            return (
              <li key={gender.id} onClick={() => onGetByGenre(gender.id)}>
                {gender.name}
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}