import styled from "styled-components";

export const ActTitle = styled.div`
display: flex;
flex-direction: column;
text-align: start;
align-items: start;
justify-content: center;
margin-bottom: 15px;
color: #232023;

  h1 {
    font-family: polaquitaFont, sans-serif;
    font-size: 64px;
  }

  p {
    margin: 15px 0;
    font-size: 20px;
  }
`;

export const Act = styled.div`
  background-color: #F4F4F4;
  padding: 25px 250px;

  @media (max-width: 1023px) {
    padding: 20px 30px 50px;
  }
`;

export const ActMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ActItems = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 15px;
  line-height: 20px;
  width: 100%;

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ActInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const ActSubTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  margin-top: 15px;
  opacity: 50%;

  div {
    display: flex;
  }
`;
