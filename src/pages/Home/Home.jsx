import React from "react";

import Header from "../../components/header/Header";

import wave from '../../images/wave.svg';
import imgOne from '../../images/image-01.jpeg';
import imgTwo from '../../images/image-02.jpeg';

import {
  FirstDobra,
  QuemSomos,
} from "./Home.style";

function Home () {
  return (
    <>
      <FirstDobra>
        <Header />

        <section>
          <div>
            <h1>Associação Beneficente Mercury Leitão</h1>
          </div>
        </section>

        <img src={ wave } alt="Imagem gráfica de onda" />
      </FirstDobra>

      <QuemSomos>
        <section>
          <div>
            <h2>QUEM SOMOS</h2>
          </div>

          <div>
            <img src={ imgOne } alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.</p>
            <img src={ imgTwo } alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.</p>
          </div>
        </section>
      </QuemSomos>
    </>
  );
}

export default Home;