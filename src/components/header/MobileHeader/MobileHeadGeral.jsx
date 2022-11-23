import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    BurgerMenu,
    LogoABM,
    MobileH,
} from './MobileHeadGeral.style.js';

import logoHorizontal from '../../../images/logo-01.png';

import RightNav from './RightNav';

function MobileHeadGeral({ fixed }) {
  const [open, setOpen] = useState(false);

  return(
    <MobileH fixed={ fixed }>
      <Link href="/">
        <LogoABM src={ logoHorizontal } alt="Logotipo da Associação Beneficente Mercury Leitão" />
      </Link>
      <BurgerMenu open={open} onClick={() => {
        setOpen(!open);
      }}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <RightNav open={open}/>
    </MobileH>
  );
};

export default MobileHeadGeral;
