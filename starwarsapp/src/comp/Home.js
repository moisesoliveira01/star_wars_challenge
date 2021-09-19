import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="home">
          <h1>Star Wars - Personagens</h1>
          <h2>Conheça as principais informações sobre os seus personagens<br></br>preferidos
            da saga com apenas alguns cliques!
          </h2>
          <Link to="/people"><button className="btn-people">Pessoas</button></Link>
          <Link to="/planets"><button className="btn-planets">Planetas</button></Link>
        </div>
    );
}