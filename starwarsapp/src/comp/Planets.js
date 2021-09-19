import React from "react";
import { useEffect } from "react";

export default function Planets({data}){
    useEffect(() => {
        const url = window.location.href;
        const cards = document.querySelectorAll('.planet-card');
        
        cards.forEach(card => {
        if (url.includes(card.querySelector('.hidden').innerHTML)){
            card.classList.add('active');

            const height = card.offsetTop;
            window.scrollTo({
                top: height,
                behavior: "smooth"
            })
        }
        });
    }, [])

    return (
        <div>
            {data.map((planets) => {
                return (
                    <div className="planet-card" key={planets.name}>
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
        </div>
    );
}