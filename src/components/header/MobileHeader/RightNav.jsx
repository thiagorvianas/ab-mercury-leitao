import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

import { SocialBtn, SocialMenu } from './HorizontalHeader.style';

const Ul = styled.ul`
z-index: 1;
list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;

    a {
        text-decoration: none;
        color: #F4F4F4;
        transition: 0.3s;
    
        :hover {
          opacity: 0.8;
        }
      }
  }

  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: #549541;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const MenuBtn = styled.li`
  font-family: polaquitaFont, sans-serif;
  font-size: 30px;
  margin: 15px 0;
  display: flex;
  transition: 0.3s;

  a {
    text-decoration: none;
    color: #F4F4F4;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
    }
  }
`;

const HoverMenuBtn = styled.li`
  margin: 15px 0;
  font-family: polaquitaFont, sans-serif;
  font-size: 30px;

  div {
    font-size: 17px;
    display: none;
  }

  a {
    text-decoration: none;
    color: #F4F4F4;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
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

const HoveredMenu = styled.div`
  background-color: #232023;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

a {
  color: #F4F4F4;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  :hover {
    background-color: #ddd;
    display: block;
  }
}
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <MenuBtn>
        <Link to="/">
          início
        </Link>
      </MenuBtn>

      {/* <HoverMenuBtn>
        <Link
          to="/redemoinho"
        >
          redemoinho
        </Link>

        <HoveredMenu>
          <Link to="/o-projeto">
            o projeto
          </Link>

          <Link to="/artistas-convidades">
            artistas convidades
          </Link>

          <Link to="/noticias">
            notícias
          </Link>

          <Link to="/edicoes">
            edições
          </Link>
        </HoveredMenu>
      </HoverMenuBtn> */}

      <MenuBtn>
        <Link to="/institucional"> 
          institucional
        </Link>
      </MenuBtn>
      
      <MenuBtn>
        <Link to="/cursos">
          cursos
        </Link>
      </MenuBtn>

      <MenuBtn>
        <Link to="/projetos">
          projetos
        </Link>
      </MenuBtn>

      <li>
        <SocialMenu>
          <SocialBtn
            type="button"
            target="_blank"
            href="https://www.instagram.com/redemoinhodedanca/"
          >
            <FaInstagram size="25px" />
          </SocialBtn>

          <SocialBtn
            type="button"
            target="_blank"
            href="https://www.facebook.com/redemoinhodedanca"
          >
            <FaFacebook size="25px" />
          </SocialBtn>

          <SocialBtn
            type="button"
            target="_blank"
            href="https://www.youtube.com/channel/UC_sFWsgggd5M5ZtoMsOR8bw"
          >
            <FaYoutube size="25px" />
          </SocialBtn>
        </SocialMenu>
      </li>
    </Ul>

    )
  }
  
  export default RightNav;
