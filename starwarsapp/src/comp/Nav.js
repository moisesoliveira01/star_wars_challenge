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
                    <Menu.Item name="Home"/>
                </Link>
                <Link to="/people" className="nav-item">
                    <Menu.Item name="People"/>
                </Link>
                <Link to="/planets" className="nav-item">
                    <Menu.Item name="Planets"/>
                </Link>
            </Container>
        </Menu>
        </div>
    );
}

export default Nav;