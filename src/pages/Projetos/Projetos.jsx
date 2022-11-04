import React from "react";

import Header from "../../components/header/Header";
import ProjectBox from "../../components/project-box/ProjectBox";
import { Sec } from "../Institucional/Institucional.style";
import { projectsData } from "../../data";
import { Projects } from "./Projetos.style";
import { TitleBar } from "../../components/titleBar.style";
import Footer from "../../components/footer/Footer";

function Projetos () {
  return (
    <>
      <Header />

      <TitleBar>
        <h1>Projetos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec malesuada dui. Aenean et enim rutrum, ornare mauris nec, facilisis nisl</p>
      </TitleBar>

      <Sec>
      <Projects>
        { projectsData.map((project) => (<ProjectBox project={ project }/>)) }
      </Projects>
      </Sec>

      <Footer />
    </>
  );
}

export default Projetos;