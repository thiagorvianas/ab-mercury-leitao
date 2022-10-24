import styled from "styled-components";

export const HeaderDesk = styled.header`
  display: flex;
  background-color: #f3f3f3;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.3s;

  div {
    img {
      width: 200px;
    }
  }

  nav {
    ul {
      display: flex;
      li {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-left: 50px;

        :hover {
          opacity: 85%;
        }
          
        a {
          text-decoration: none;
          color: #292929;
        }
      }
    }
  }
`;

export const Selected = styled.div`
  width: 100%;
  height: 5px;
  transition: 0.3s;
  background-color: green;
`;
