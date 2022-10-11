import styled from "styled-components";

import heartImage from '../../images/heart-image.jpeg';

export const FirstDobra = styled.section`
  display: flex;
  flex-direction: column;
  height: 110vh;
  background-image: url("${heartImage}");
  background-size: cover;

  section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    div {
      display: flex;
      color: #f3f3f3;
      justify-content: center;
      padding: 0 20px;
    
      h1 {
        font-size: 50px;
      }
    }
  }
`;

export const QuemSomos = styled.section`
  display: flex;
  flex-direction: column;

  section {
    
  }

  img {
    width: 250px;
  }
`;
