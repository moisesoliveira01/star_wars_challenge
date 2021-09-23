import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import '../comp/style.css';
import api from "./api";

export default function People({data}){
    const [peopleData, setPeopleData] = useState(data);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        async function fetchData(){
            await api.get(`/people/?page=${pageNumber}`).then((response) => {setPeopleData(response.data.results)});
        }
        fetchData();
    }, [pageNumber]);

    useEffect(() => {
        const next = document.getElementById('btn-next');
        const prev = document.getElementById('btn-prev');

        if (pageNumber === 9){
            next.disabled = true;
            next.classList.add('btn-disabled');
        }
        else{
            next.disabled = false;
            next.classList.remove('btn-disabled');
        }

        if (pageNumber === 1){
            prev.disabled = true;
            prev.classList.add('btn-disabled');
        }
        else{
            prev.disabled = false;
            prev.classList.remove('btn-disabled');
        }

    }, [pageNumber]);

    function nextPage(){
        setPageNumber(pageNumber + 1);
    }

    function prevPage(){
        setPageNumber(pageNumber - 1);
    }

    return (
        <div>
            <h1 className="title">Personagens</h1>
            {peopleData.map((people) => {
                return (
                    <div className="card" key={people.name}>
                        <p className="nome">Nome: {people.name}</p>
                        <p className="altura">Altura: {people.height}</p>
                        <p>Massa: {people.mass}</p>
                        <p>Cor do cabelo: {people.hair_color}</p>
                        <p>Cor da pele: {people.skin_color}</p>
                        <p>Gênero: {people.gender}</p>
                        <p>Ano de nascimento: {people.birth_year}</p>
                        <p>Planeta Natal: <Link to={"/planets/?"+people.homeworld}>Acessar</Link></p>
                        <br></br>
                    </div>
                );
            })};
            <button className="btn-pag" id="btn-next" onClick={nextPage}>Próxima</button>
            <button className="btn-pag" id="btn-prev" onClick={prevPage}>Anterior</button>
            <label className="label-pag">Página: {pageNumber}</label>
        </div>
    );
}