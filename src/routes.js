import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Institucional from './pages/Institucional/Institucional';
import Cursos from './pages/Cursos/Cursos';
import Projetos from './pages/Projetos/Projetos';
// import FaleConosco from './pages/Fale-conosco/FaleConosco';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/institucional" component={ Institucional } />
      <Route exact path="/cursos" component={ Cursos } />
        <Route exact path="/cursos/:id" component={ Cursos } />
      <Route exact path="/projetos" component={ Projetos } />
        <Route exact path="/projetos/:id" component={ Projetos } />
      {/* <Route exact path="/fale-conosco" component={ FaleConosco } /> */}
    </Switch>
  );
}

export default Content;