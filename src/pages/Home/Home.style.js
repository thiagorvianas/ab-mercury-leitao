import styled from "styled-components";

import heartImage from '../../images/heart-image.jpeg';
import facaParteBg from '../../images/faca-parte.jpg';

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

export const Sec = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15vw 50px;
  background-color: #f3f3f3;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MediumImage = styled.img`
  width: 350px;
  margin: 0 20px 10px 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const Bar = styled.div`
  display: flex;
  width: 77%;
  height: 5px;
  background-color: ${(prop) => prop.green ? '#549541' : '#edd251'};
  margin: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
`;

export const Block = styled.div`
  display: flex;
`;

export const CoursesContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ShowMore = styled.button`
  padding: 5px 10px;
  border: 2px solid #549541;
  width: 100px;
  background-color: #549541;
  border-radius: 20px;
  margin-top: 15px;
  color: white;
  
  :hover {
    border: 2px solid #292929;
    background-color: #f3f3f3;
    color: #292929;
    cursor: pointer;
  }
`;

export const FacaParteSec = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 15vw;
  background-image: url("${facaParteBg}");
  background-size: cover;
  // padding: 50px;
`;

export const FacaParteBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
  width: 320px;
  height: 320px;
  border-radius: 35px;

  img {
    width: 85px;
    margin-bottom: 15px;
  }

  button {
    border: 2px solid #292929;
    background: none;
    border-radius: 20px;
    padding: 5px 10px;
    margin-top: 15px;

    :hover {
      border: 2px solid #549541;
      background-color: #549541;
      color: white;
      cursor: pointer;
    }
  }
`;
