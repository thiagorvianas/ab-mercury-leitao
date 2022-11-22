import styled from 'styled-components';

const RedemoinhoHeader = styled.header`
  align-items: center;
  display: flex;
  gap: 20px;
  position: ${prop => prop.fixed ? 'fixed' : ''};
  background-color: white;
  justify-content: space-around;
  min-height: 120px;
  width: 100%;
  z-index: 1;
  padding-inline: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 1s;
`;

export const LogoRedemoinho = styled.img`
  width: 70px;
`;

export const HorizontalMenu = styled.nav`
  font-family: polaquitaFont, sans-serif;
  font-size: 22px;
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 0 20px;

      a {
        text-decoration: none;
        color: #232023;
        transition: 0.3s;

        :hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const SocialMenu = styled.nav`
  position: absolute;
  right: 100px;
  bottom: 0px;
  display: flex;
  background-color: #549541;
  padding: 10px;
`;

export const SocialBtn = styled.a`
  margin: 0 10px;
  color: #F4F4F4;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const HoverMenuBtn = styled.li`
  margin: 15px 0;

  a {
    text-decoration: none;
    // color: #F4F4F4;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
      cursor: ${prop => prop.redemoinho ? 'default' : 'pointer'};
    }
  }

  :hover {
    display: block;
    div {
      font-size: 17px;
      display: block;
    }
  }
`;

export const HoveredMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #232023;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

a {
  color: #F4F4F4 !important;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  :hover {
    background-color: #ddd;
    display: block;
    cursor: pointer;
  }
}
`;

export default RedemoinhoHeader;
