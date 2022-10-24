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

export const Sec = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15vw 50px;
  background-color: #f3f3f3;

  section {
    display: flex;
    flex-direction: column;
  }
`;

export const MediumImage = styled.img`
  width: 350px;
  margin: 0 20px 10px 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Bar = styled.div`
  width: 75%;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background-color: white;
  margin: 20px;
  overflow: hidden; 
  border-radius: 10px;
  cursor: pointer;

  :hover {
    opacity: 80%;
    transition: 0.3s
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100px; 
  background-color: grey;
  background-image: url("${(prop) => prop.src}");
  background-size: cover;
`;

export const CoursesContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CourseTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Prof = styled.p`
  font-size: 15px;
  opacity: 75%;
  margin: 0;
`;

export const CargaHoraria = styled.p`
  font-size: 15px;
  opacity: 50%;
  margin: 5px 0 0;
`;

export const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
  padding: 10px 10px 5px;
`;
