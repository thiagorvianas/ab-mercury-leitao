import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  PreviewText,
  Box,
  ProjectImage,
  Info,
  ProjectContent,
} from './ProjectBox.style';
import { ShowMore } from '../../pages/Home/Home.style';

function ProjectBox({ project }) {
  const history = useHistory();

  return (
    <Box>
        <ProjectImage image={ project.previewImage } />

        <ProjectContent>
            <Info>
            <h1>{ project.title }</h1>
            <PreviewText>{ project.description }</PreviewText>
            </Info>
        
            <ShowMore type="button" onClick={ () => history.push(`/projetos/${project.id}`) } >Saiba mais</ShowMore>
        </ProjectContent>
    </Box>
  );
}

export default ProjectBox;
