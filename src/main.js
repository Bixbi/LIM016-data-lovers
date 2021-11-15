import data from './data/ghibli/ghibli.js';
import {
    
    filterData, 
    searchData,
    


} from './data.js';

const filmsData = data.films;
const containerFilms = document.querySelector('#containerFilms');
const inputSearch = document.getElementById('searchFilms');

const filmsList = (list) => {

    list.forEach((ghibli) => {
        const frameFilms = document.createElement('div');
        frameFilms.className = 'filmsGroup';
        frameFilms.innerHTML = `<div class="detalle-films">
                                 <img src="${ghibli.poster}">
                                 <hr width=210  size=7 color="#FFF">
                                 <p class="title" >${ghibli.title}</p>
                                 <p class="title" >DIRECTOR: ${ghibli.director}</p>

                                 </div>`;
        containerFilms.appendChild(frameFilms);
    });
};

filmsList(filmsData);

inputSearch.addEventListener('input', () =>{
    const newDataFilter = searchData(filmsData, inputSearch.value);
        containerFilms.innerHTML = '';
        filmsList(newDataFilter);
});

