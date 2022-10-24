import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import wave from '../../images/wave.svg';
import imgOne from '../../images/image-01.jpeg';
import imgTwo from '../../images/image-02.jpeg';
import { cursos } from "../../cursos";

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
        </section>
      </Sec>

      <Footer />
    </>
  );
}

export default Home;