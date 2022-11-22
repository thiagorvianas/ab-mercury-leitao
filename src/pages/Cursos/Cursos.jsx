import React, { useState, useEffect } from "react";

import PagesHeaderUniversal from "../../utils/AlternateHeader";
import { TitleBar } from "../../components/titleBar.style";
import { Sec } from "../Institucional/Institucional.style";
import { CoursesContent } from "../Home/Home.style";
import CourseBox from "../../components/course-box/CourseBox";
import Footer from "../../components/footer/Footer";

import { cursos } from '../../data';

function Cursos () {
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
  return (
    <>
      <PagesHeaderUniversal hideHeader={ hideHeader } />

      <TitleBar>
        <h1>Cursos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec malesuada dui. Aenean et enim rutrum, ornare mauris nec, facilisis nisl</p>
      </TitleBar>

      <Sec>
        <CoursesContent>
          { cursos.map((curso) => (<CourseBox key={ curso.id } curso={ curso } />)) }
        </CoursesContent>
      </Sec>

      <Footer />
    </>
  );
}

export default Cursos;