import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div>
        <h1>Star Wars - Personagens</h1>
        <h2>Conheça as principais informações sobre os seus personagens preferidos<br></br>
            da saga com apenas alguns cliques!
        </h2>
        <Menu inverted>
            <Container>
                <Link to="/">
                    <Menu.Item name="star wars info"/>
                </Link>
                <Link to="/people">
                    <Menu.Item name="people"/>
                </Link>
                <Link to="/planets">
                    <Menu.Item name="planets"/>
                </Link>
            </Container>
        </Menu>
        </div>
    );
}

export default Nav;