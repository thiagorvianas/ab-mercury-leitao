import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import daLogo from '../../images/datamerica-logo.png';
import abLogo from '../../images/logo-ab-mercury-leitao.png';

import { Link } from 'react-router-dom';

import {
  FooterSec,
  Title,
  Bar,
  ContactInfos,
  ContactInfo,
  Logos,
  FooterContent,
  Copyright,
} from './Footer.style';

function Footer () {
  return (
    <FooterSec>
      <div>
        <Title>
          <h2>Contato</h2>
          <Bar green />
        </Title>
        <FooterContent>
          <ContactInfos>
            <ContactInfo>
             <HiLocationMarker />
              <p>R. João Emílio Falcão, 603 - Fátima, Teresina - PI, 64049-480</p>
            </ContactInfo>

            <ContactInfo>
              <AiFillPhone />
              <p>(86) 9 9945-3668</p>
            </ContactInfo>

            <ContactInfo>
              <MdEmail />
              <p>mercuryleitao@gmail.com</p>
            </ContactInfo>
          </ContactInfos>

          <Logos>
            <a rel="noreferrer" target="_blank" href="http://www.datamericaltda.com.br">
              <img src={ daLogo } alt="" />
            </a>
            <Link to="/">
            <img src={ abLogo } alt="" />
            </Link>
          </Logos>
        </FooterContent>

        <Copyright>
          <Bar yellow />
          <p>Todos os direitos reservados - 2022 ® Associação Beneficente Mercury Leitão</p>
        </Copyright>
      </div>
    </FooterSec>
  );
}

export default Footer;
