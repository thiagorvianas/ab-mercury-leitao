import styled from "styled-components";

export const FooterSec = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 25px 15vw 50px;

  @media (max-width: 1023px) {
    padding: 25px 5vw 25px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Bar = styled.div`
  width: 90%;
  height: 5px;
  background-color: ${(prop) => prop.green ? '#549541' : '#edd251'};
  margin: 10px;
`;

export const ContactInfos = styled.div`

`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 10px 20px 10px 0;
    color: #549541;
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    margin-left: 20px;
  }

  @media (max-width: 1023px) {
    margin-top: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  text-align: center;
  
  p {
    font-size: 12px;
    opacity: 50%;
  }
`;
