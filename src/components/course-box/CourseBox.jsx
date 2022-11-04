import React from "react";

import {
  Card,
  CardImage,
  CourseTitle,
  Prof,
  CargaHoraria,
  CourseInfo
} from "./CourseBox.style";

function CourseBox({ curso, white }) {
  return (
    <Card white={ white } key={ curso.id } >
      <CardImage src={ curso.image } />
      <CourseInfo>
        <CourseTitle>{ curso.title }</CourseTitle>
        <div>
          <Prof>{ curso.teatcher }</Prof>
          <CargaHoraria>{ `Carga-horária de: ${curso.hours}h` }</CargaHoraria>
        </div>
      </CourseInfo>
    </Card>
  );
}

export default CourseBox;
