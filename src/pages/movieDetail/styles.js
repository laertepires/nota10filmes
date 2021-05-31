import styled from 'styled-components';

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  margin: 0;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.background});

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000b8;
  }

  .container {
    max-width: 400px;
    z-index: 1;
    color: #FFF;
    margin: 0 30px 0 30px;

    @media screen and (min-width: 992px) {
      margin: 0 0 0 100px;
    }

    h1 {
      margin: 0;
    }

    h2 {
      color: #ff5200;
    }
  }

`