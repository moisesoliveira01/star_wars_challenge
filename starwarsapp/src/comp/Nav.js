import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div className="nav">
        <Menu inverted>
            <Container className="nav-menu">
                <Menu.Item name="Star Wars Info" className="nav-info"/>
                <Link to="/" className="nav-item">
                    <Menu.Item name="Home" className="nav-menu-item"/>
                </Link>
                <Link to="/people" className="nav-item">
                    <Menu.Item name="Pessoas" className="nav-menu-item"/>
                </Link>
                <Link to="/planets" className="nav-item">
                    <Menu.Item name="Planetas" className="nav-menu-item"/>
                </Link>
            </Container>
        </Menu>
        </div>
    );
}

export default Nav;