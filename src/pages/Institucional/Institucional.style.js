import styled from "styled-components";

export const Sec = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px 15vw 50px;
//   background-color: #f3f3f3;
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  

  img {
    filter: invert(50%);
    width: 100px;
    margin-right: 25px;
  }
`;