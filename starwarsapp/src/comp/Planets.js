import React from "react";
import { useEffect, useState } from "react";
import api from "./api";

export default function Planets({data}){
    const [planetsData, setPlanetsData] = useState(data);
    const [pageNumber, setPageNumber] = useState(1);
    const [planetNumber, setPlanetNumber] = useState(1)

    useEffect(() => {
        const url = window.location.href;
        const cards = document.querySelectorAll('.card');

        if (pageNumber === 1){
            getPlanetPage();
        }

        cards.forEach(card => {
        if (url.includes(card.querySelector('.hidden').innerHTML)){
            card.classList.add('active');

            const height = card.offsetTop - 150;
            window.scrollTo({
                top: height,
                behavior: "smooth"
            })
        }
        });
    }, [planetsData])

    useEffect(() => {
        async function fetchData(){
            await api.get(`/planets/?page=${pageNumber}`).then((response) => {setPlanetsData(response.data.results)});
        }
        fetchData();
    }, [pageNumber]);

    useEffect(() => {
        const next = document.getElementById('btn-next');
        const prev = document.getElementById('btn-prev');

        if (pageNumber === 6){
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

    function getPlanetPage(){
        const url = window.location.href;
        setPlanetNumber(url.charAt(url.length - 3)+url.charAt(url.length - 2));

        if (planetNumber >= 1 && planetNumber <= 10){
            setPageNumber(1);
        }
        else if(planetNumber >= 11 && planetNumber <= 20){
            setPageNumber(2);
        }
        else if(planetNumber >= 21 && planetNumber <= 30){
            setPageNumber(3);
        }
        else if(planetNumber >= 31 && planetNumber <= 40){
            setPageNumber(4);
        }
        else if(planetNumber >= 41 && planetNumber <= 50){
            setPageNumber(5);
        }
        else if(planetNumber >= 51 && planetNumber <= 60){
            setPageNumber(6);
        }
    }

    return (
        <div>
            <h1 className="title">Planetas</h1>
            {planetsData.map((planets) => {
                return (
                    <div className="card" key={planets.name}>
                        <p className="nome">Nome: {planets.name}</p>
                        <p>Diâmetro: {planets.diameter}</p>
                        <p>Clima: {planets.climate}</p>
                        <p>Gravidade: {planets.gravity}</p>
                        <p>População: {planets.population}</p>
                        <p>Terreno: {planets.terrain}</p>
                        <p className="hidden">{planets.url}</p>
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