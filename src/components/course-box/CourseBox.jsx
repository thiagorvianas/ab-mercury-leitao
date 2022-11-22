import React from "react";
import { Link } from "react-router-dom";

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
    <Link to={ `/cursos/${curso.id}` }>
      <Card white={ white } key={ curso.id } >
        <CardImage src={ curso.image } />
        <CourseInfo>
          <CourseTitle>{ curso.title }</CourseTitle>
            <Prof>{ curso.teacher }</Prof>
            <CargaHoraria>{ `Carga-horária de: ${curso.workload}h` }</CargaHoraria>
        </CourseInfo>
      </Card>
    </Link>
  );
}

export default CourseBox;
