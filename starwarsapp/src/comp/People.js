import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../comp/style.css';

export default function People({data}){
    return (
        <div>
            {data.map((people) => {
                return (
                    <div className="people-card" key={people.name}>
                        <p className="nome">Nome: {people.name}</p>
                        <p>Altura: {people.height}</p>
                        <p>Massa: {people.mass}</p>
                        <p>Cor do cabelo: {people.hair_color}</p>
                        <p>Cor da pele: {people.skin_color}</p>
                        <p>Gênero: {people.gender}</p>
                        <p>Ano de nascimento: {people.birth_year}</p>
                        <p>Planeta Natal: <Link to={"/planets/?"+people.homeworld}>{people.homeworld}</Link></p>
                        <br></br>
                    </div>
                );
            })};
        </div>
    );
}