import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoHorizontal from '../../images/logo-01.png';

import {
  HeaderDesk,
  Selected,
} from './Header.style';

function Header({ fixed }) {
  const location = useLocation().pathname;
  return (
    <HeaderDesk fixed={ fixed }>
      <div>
        <Link to="/">
          <img src={ logoHorizontal } alt="Logotipo da Associação Beneficente Mercury Leitão" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <div>
              <Link to="/">
                Início
              </Link>
            </div>
            {location === "/" && <Selected />}
          </li>

          <li>
            <Link to="/institucional">
              Institucional
            </Link>
            {location === "/institucional" && <Selected />}
          </li>

          <li>
            <Link to="/cursos">
              Cursos
            </Link>
            {location.includes("/cursos") && <Selected />}
          </li>

          <li>
            <Link to="/projetos">
              Projetos
            </Link>
            {location.includes("/projetos") && <Selected />}
          </li>

          {/* <li>
            <Link to="/fale-conosco">
              Fale Conosco
            </Link>
            {location === "/fale-conosco" && <Selected />}
          </li> */}
        </ul>
      </nav>
    </HeaderDesk>
  );
}

export default Header;
