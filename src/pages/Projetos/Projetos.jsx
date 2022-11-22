import React, { useState, useEffect } from "react";

import PagesHeaderUniversal from "../../utils/AlternateHeader";
import ProjectBox from "../../components/project-box/ProjectBox";
import { Sec } from "../Institucional/Institucional.style";
import { projectsData } from "../../data";
import { Projects } from "./Projetos.style";
import { TitleBar } from "../../components/titleBar.style";
import Footer from "../../components/footer/Footer";

function Projetos () {
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