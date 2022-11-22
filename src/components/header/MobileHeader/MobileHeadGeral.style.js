import styled from 'styled-components';

export const BurgerMenu = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 22px;
  left: 20px; 
  z-index: 20;
  display: none;
  background: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2.75rem;
    height: 0.40rem;
    background-color: #549541;
    border-radius: 15px;
    transform-origin: 1px;
    transition: all 0.3s linear;
   
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const LogoABM = styled.img`
  position: absolute;
  top: 25px;
  right: 20px;  
  width: 175px;
`;

export const MobileH = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-size: cover;
  position: ${prop => prop.fixed ? 'fixed' : ''};
  background-position: 70%;
  background-color: white;
  z-index: 1;
`;

export const SocialMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #232023;
  opacity: 0.1;
  padding: 10px;
`;

export const SocialBtn = styled.a`
  margin: 10px 5px;
  color: #F4F4F4;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const HomeTitleMobile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  color: #F4F4F4;
  
  h1 {
    font-size: 65px;
    letter-spacing: px;
    font-family: polaquitaFont, sans-serif;;
  }

  h3 {
    font-size: 15px;
    letter-spacing: 12px;
  }
`;

export const ArrowForMoreContent = styled.div`
  bottom: 0px;
  color: #F4F4F4;
  position: absolute;
  animation: bounce 1s ease-in-out infinite;
  animation-fill-mode: both;
  animation-direction: alternate;

  @keyframes bounce {
    from {
      top: 85%;
    }
    to {
      top: 95%;
    }
  }
`;
