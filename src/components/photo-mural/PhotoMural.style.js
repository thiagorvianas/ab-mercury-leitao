import styled from 'styled-components';

export const Photos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;

export const Mural = styled.div`
  width: 750px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px;

  @media (max-width: 1023px) {
    width: 300px;
    height: 200px;
  }
`

export const MuralBtn = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F4F4F4;
  background-color: #232023;
  cursor: pointer;

  :hover {
    color: #232023;
    background-color: #fff;
  }

  svg {
    font-size: 20px;
    margin: 5px;
  }

  @media (max-width: 1023px) {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Photo = styled.div`
  width: 675px;
  background-size: cover;
  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
