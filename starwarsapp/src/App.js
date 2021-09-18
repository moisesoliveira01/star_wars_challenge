import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Nav from './comp/Nav';
import Home from './comp/Home';
import People from './comp/People';
import Planets from './comp/Planets';

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPeople(){
      let response = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await response.json();

      setPeople(data.results);
    }

    async function getPlanets(){
      let response = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await response.json();

      setPlanets(data.results);
    }

    getPeople();
    getPlanets();
  }, [])

  return <div>
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