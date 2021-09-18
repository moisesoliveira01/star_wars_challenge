import React from "react";
import '../comp/style.css'

export default function People({data}){
    return (
        <div>
            {data.map((people) => {
                return (
                    <table className="people-card">
                        <tr><td>Nome: {people.name}</td></tr>
                        <tr>Altura: {people.height}</tr>
                        <tr>Massa: {people.mass}</tr>
                        <tr>Cor do cabelo: {people.hair_color}</tr>
                        <tr>Planeta Natal: {people.homeworld}</tr>
                        <br></br>
                    </table>
                );
            })};
        </div>
    );
}