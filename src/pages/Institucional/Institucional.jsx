import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { TitleBar } from "../../components/titleBar.style";
import { Sec, Item } from "./Institucional.style";
import missao from '../../images/Missão.png'
import visao from '../../images/Visão.png'
import valores from '../../images/Valores.png'

function Institucional () {
  return (
    <>
      <Header />
      <TitleBar>
        <h1>Institucional</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec malesuada dui. Aenean et enim rutrum, ornare mauris nec, facilisis nisl</p>
      </TitleBar>

      <Sec>
        <Item>
          <img src={ missao } alt="Ícone que representa a missão da associação" />
          <p>Levar às pessoas menos favorecidas o máximo de oportunidades para o seu desenvolvimento: pessoal, familiar, social, profissional e espiritual.</p>
        </Item>

        <Item>
          <img src={ visao } alt="Ícone que representa a visao da associação" />
          <p>Ser uma entidade sem fins lucrativos de excelência e referência na prestação de serviços à população piauiense, prioritariamente nas áreas da Saúde e Educação.</p>
        </Item>

        <Item>
          <img src={ valores } alt="Ícone que representa a valores da associação" />
          <p>Fé, trabalho, família, ética, transparência, amizade, companheirismo, empreendedorismo e inovação.</p>
        </Item>
      </Sec>

      <Footer />
    </>
  );
}

export default Institucional;