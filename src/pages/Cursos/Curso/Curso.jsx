import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../../components/Footer";
import { PagesHeaderUniversal } from "../../../utils/AlternateHeader";

import {
  Act, ActInfo, ActItems, ActMain, ActSubTitle, ActTitle
} from './Curso.style';

import { AiTwotoneCalendar } from 'react-icons/ai';
import { BiTimeFive, BiUserCircle } from 'react-icons/bi';
import PhotoMural from "../../../components/photo-mural/PhotoMural";

import actionsData from "../../../db/Actions.db";

function Curso () {
  const { id } = useParams();
  const data = actionsData[id - 1];

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
      
      <Act>
        <ActTitle>
          <h1>{ data.title }</h1>
        </ActTitle>

        <ActSubTitle>
          <ActInfo>
            <BiUserCircle />
            <p>{ data.teacher }</p>
          </ActInfo>
            
          <ActInfo>
            <AiTwotoneCalendar />
            <p>{ data.date }</p>
          </ActInfo>

          <ActInfo>
            <BiTimeFive />
            <p>{ `${data.workload}h` }</p>
          </ActInfo>
        </ActSubTitle>

        <ActMain>
          <ActItems>
            <p>{ data.text }</p>
          </ActItems>

          <PhotoMural photos={ data.photos } title={ data.title } />
        </ActMain>
      </Act>
      
      <Footer />
    </>
  );
}

export default Curso;