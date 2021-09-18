import React from "react";

export default function Planets({data}){
    return (
        <div>
            {data.map((planets) => {
                return (
                    <table className="planet-card">
                        <tr><td>Nome: {planets.name}</td></tr>
                        <tr>Diâmetro: {planets.diameter}</tr>
                        <tr>Clima: {planets.climate}</tr>
                        <tr>Gravidade: {planets.gravity}</tr>
                        <tr>População: {planets.population}</tr>
                        <br></br>
                    </table>
                );
            })};
        </div>
    );
}