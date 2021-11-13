import data from './data/ghibli/ghibli.js';
import {


} from './data.js';


const filmsData = data.films;
const containerPokemons = document.querySelector('#containerFilms');




const filmsList = (list) => {

    list.forEach((ghibli) => {
        const frameFilms = document.createElement('div');
        frameFilms.className = 'filmsGroup';
        frameFilms.innerHTML = `<div class="detalle-films">
                                 <img src="${ghibli.poster}">
                                 <hr width=210  size=10 color="#FFF">
                                 <p class="title" >${ghibli.title}</p>
                                 <p class="title" >${ghibli.director}</p>

                                 </div>`;

        containerPokemons.appendChild(frameFilms);
    });
};

filmsList(filmsData);