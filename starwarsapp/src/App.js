import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Nav from './comp/Nav';
import Home from './comp/Home';
import People from './comp/People';
import Planets from './comp/Planets';
import api from './comp/api';

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getPeople(){
      const data = await api.get('people/?page=1').then((response) => {return response.data});

      setPeople(data.results);
    }

    async function getPlanets(){
      const data = await api.get('planets/?page=1').then((response) => {return response.data});

      setPlanets(data.results);
    }

    getPeople();
    getPlanets();
  }, [])

  return <div className="pag">
    <BrowserRouter>
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <People data={people}/>
          </Route>
          <Route exact path="/planets">
            <Planets data={planets}/>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  </div>;
}

export default App;