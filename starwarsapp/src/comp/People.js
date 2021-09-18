import React from "react";
import Peoplestyle from './peoplestyle.css';

export default function People({data}){
    return (
        <div>
            {data.map((people, i) => {
                return (
                    <table className="people-card">
                        <tr>Nome: {people.name}</tr>
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