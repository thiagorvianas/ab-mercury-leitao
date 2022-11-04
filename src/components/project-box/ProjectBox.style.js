import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  text-decoration: none;
  width: 500px;
  height: 200px;
  color: #232023;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  overflow: hidden; 
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
`;

export const ProjectImage = styled.div`
  width: 600px;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: 70%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewText = styled.p`
  font-size: 14px;
  opacity: 50%;
  margin-top: 5px;
`;
