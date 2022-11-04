import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import wave from '../../images/wave.svg';
import imgOne from '../../images/image-01.jpeg';
import imgTwo from '../../images/image-02.jpeg';
import { cursos, facaParteData } from "../../data";

import {
  FirstDobra,
  Sec,
  MediumImage,
  Title,
  Content,
  Block,
  Bar,
  Card,
  CardImage,
  CoursesContent,
  CourseTitle,
  Prof,
  CargaHoraria,
  CourseInfo,
  FacaParteSec,
  FacaParteBox,
  ShowMore
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

      <Sec>
        <section>
          <Title>
            <h2>QUEM SOMOS</h2>
            <Bar green />
          </Title>

          <Content>
            <Block>
              <MediumImage src={ imgOne } alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.
              </p>
            </Block>

            <Block>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.</p>
              <MediumImage src={ imgTwo } alt="" />
            </Block>

            <ShowMore type="button">Saiba mais</ShowMore>
          </Content>
        </section>
      </Sec>

      <Sec>
        <section>
          <Title>
            <Bar yellow />
            <h2>NOSSOS CURSOS</h2>
          </Title>

          <CoursesContent>
            { cursos.map((curso) => (
            <Card key={ curso.id } >
              <CardImage src={ curso.image } />
              <CourseInfo>
                <CourseTitle>{ curso.title }</CourseTitle>
                <div>
                  <Prof>{ curso.teatcher }</Prof>
                  <CargaHoraria>{ `Carga-horária de: ${curso.hours}h` }</CargaHoraria>
                </div>
              </CourseInfo>
            </Card>)
            ) }
          </CoursesContent>

          <ShowMore type="button">Ver todos</ShowMore>
        </section>
      </Sec>

      <FacaParteSec>
        { facaParteData.map((item) => (
          <FacaParteBox key={ item.id }>
            <img src={ item.image } alt={ item.alt } />
            <div>
              <h2>{ item.title }</h2>
              <p>{ item.description }</p>
            </div>
            <button type="button">{ item.btnText }</button>
          </FacaParteBox>
        )) }
      </FacaParteSec>

      <Footer />
    </>
  );
}

export default Home;