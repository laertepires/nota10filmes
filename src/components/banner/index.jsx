import { React } from 'react';
import banner from '../../assets/img/banner-mortal-kombat.png';
import {BannerImage, Container}  from './styles.js';


export default function Banner () {
  return (
    <Container>
      <BannerImage src={banner}/>
    </Container>
  )
}