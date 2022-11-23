import styled from "styled-components";

export const Sec = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px 15vw 50px;
  
  @media (max-width: 1023px) {
    padding: 25px 5vw 50px;
  }
`;

export const Projects = styled.div`
  display: flex;
  justify-content: start;
  text-decoration: none;
  
  h1 {
    font-size: 16px;
  }

  :hover {
    opacity: 90%;
    transition: 0.3s;
  }
`;
