import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import '../comp/style.css';
import api from "./api";

export default function People({data}){
    const [peopleData, setPeopleData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
   
    useEffect(async() => {
        const response = await api.get('/people/?page=1').then((response) => {return response.data});
        
        setPeopleData(response.results);
    }, []);
    
    console.log('pagina ini = '+pageNumber);
    //console.log(peopleData);
    //console.log(data);

    async function nextPage(){
        setPageNumber(pageNumber + 1);
        console.log('pagina atualizada = '+pageNumber);
        data = await api.get(`/people/?page=${pageNumber}`).then((response) => {return response.data.results});
        
        setPeopleData(data);
        //console.log(peopleData);
    }

    async function prevPage(){
        setPageNumber(pageNumber - 1);
        console.log('pagina decresc = '+pageNumber);
        data = await api.get(`/people/?page=${pageNumber}`).then((response) => {return response.data.results});
        
        setPeopleData(data);
    }

    return (
        <div>
            {peopleData.map((people) => {
                return (
                    <div className="people-card" key={people.name}>
                        <p className="nome">Nome: {people.name}</p>
                        <p className="altura">Altura: {people.height}</p>
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
            <button className="btn-pag" onClick={nextPage}>Próxima</button>
            <button className="btn-pag" onClick={prevPage}>Anterior</button>
            <label className="label-pag">Página: {pageNumber}</label>
        </div>
    );
}