import React, { useState, useEffect } from 'react';

// import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// import wave from '../../images/wave.svg';
import imgOne from '../../images/image-01.jpeg';
import imgTwo from '../../images/image-02.jpeg';
import { cursos, facaParteData } from "../../data";
import CourseBox from "../../components/course-box/CourseBox";
import PagesHeaderUniversal from "../../utils/AlternateHeader";

import {
  FirstDobra,
  Sec,
  MediumImage,
  Title,
  Content,
  Block,
  Bar,
  CoursesContent,
  FacaParteSec,
  FacaParteBox,
  ShowMore
} from "./Home.style";
import { useHistory } from "react-router-dom";

function Home () {
  const [isHide, setIsHide] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  const hideBar = () => {
    window.scrollY > prevScroll ?
    !isHide && setIsHide(true)
    :
    isHide && setIsHide(false);

    setPrevScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', hideBar);
    prevScroll > 150 ? setHideHeader(true) : setHideHeader(false);
  }, [hideBar, prevScroll]);
  
  const history = useHistory();

  return (
    <>
      <PagesHeaderUniversal hideHeader={ hideHeader } />

      <FirstDobra>

        <section>
          <div>
            <h1>Associação Beneficente Mercury Leitão</h1>
          </div>
        </section>

        {/* <img src={ wave } alt="Imagem gráfica de onda" /> */}
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

            <ShowMore type="button" >Saiba mais</ShowMore>
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
            { cursos.map((curso) => (<CourseBox white curso={ curso } />)) }
          </CoursesContent>

          <ShowMore type="button" onClick={ () => history.push('/cursos') } >Ver todos</ShowMore>
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
            <button type="button" onClick={ () => history.push(`/${item.link}`) }>{ item.btnText }</button>
          </FacaParteBox>
        )) }
      </FacaParteSec>

      <Footer />
    </>
  );
}

export default Home;