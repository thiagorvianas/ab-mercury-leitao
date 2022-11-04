import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  background-color: ${(prop) => prop.white ? 'white' : '#f3f3f3'};
  margin: 20px;
  overflow: hidden; 
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;

  :hover {
    opacity: 80%;
    transition: 0.3s
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 150px; 
  background-color: grey;
  background-image: url("${(prop) => prop.src}");
  background-size: cover;
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
  height: 45%;
  justify-content: space-between;
  padding: 10px 15px 5px;
`;
