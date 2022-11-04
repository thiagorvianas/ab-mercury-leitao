import React from "react";

import {
  PreviewText,
  Box,
  ProjectImage,
  Info,
  ProjectContent,
} from './ProjectBox.style';
import { ShowMore } from "../../pages/Home/Home.style";

function ProjectBox({ project }) {
  return (
    <Box>
        <ProjectImage image={ project.previewImage } />

        <ProjectContent>
            <Info>
            <h1>{ project.title }</h1>
            <PreviewText>{ project.description }</PreviewText>
            </Info>
        
            <ShowMore type="button">Saiba mais</ShowMore>
        </ProjectContent>
    </Box>
  );
}

export default ProjectBox;
