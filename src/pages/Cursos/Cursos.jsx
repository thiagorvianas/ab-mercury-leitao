import React from "react";

import Header from "../../components/header/Header";
import { TitleBar } from "../../components/titleBar.style";
import { Sec } from "../Institucional/Institucional.style";
import { CoursesContent } from "../Home/Home.style";
import CourseBox from "../../components/course-box/CourseBox";
import Footer from "../../components/footer/Footer";

import { cursos } from '../../data';

function Cursos () {
  return (
    <>
      <Header />

      <TitleBar>
        <h1>Cursos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec malesuada dui. Aenean et enim rutrum, ornare mauris nec, facilisis nisl</p>
      </TitleBar>

      <Sec>
        <CoursesContent>
          { cursos.map((curso) => (<CourseBox curso={ curso } />)) }
        </CoursesContent>
      </Sec>

      <Footer />
    </>
  );
}

export default Cursos;