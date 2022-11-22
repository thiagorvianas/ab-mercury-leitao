import styled from "styled-components";

export const TitleBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 15vw;
  color: white;
  background-color: #549541;
//   background-image: url("");
  background-size: cover;

  h1 {
    font-size: 30px;
  }

  @media (max-width: 1023px) {
    padding: 30px 5vw;
  }
`;
