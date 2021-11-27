import data from './data/ghibli/ghibli.js';
import {
    searchData,
    orderFilms,
    orderFilmsRever,
    generalFilter,

} from './data.js';

const filmsData = data.films;
const containerFilms = document.querySelector('#containerFilms');
const inputSearch = document.getElementById('searchFilms');
const orderBy = document.querySelector('#order-by');
const byTitle = document.querySelector('#byTitle');
const byDirector = document.querySelector('#byDirector');
const byProducer = document.querySelector('#byProducer');
const byYear = document.getElementById("byYear");
const byScore = document.getElementById("byScore");

/*-------------Funcion cargar los select al cargar pagina-------------------*/
const filmsList = (list) => {
    let count = 0;
    list.forEach((ghibli) => {
        const frameFilms = document.createElement('div');
        frameFilms.className = 'filmsGroup';
        frameFilms.innerHTML = `<div class="detalle-films">
                                 <img src="${ghibli.poster}">
                                 <hr>
                                 <p class="title" >Título &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.title}</p>
                                 <p class="title" >Director &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.director}</p>
                                 <p class="title" >Productor &nbsp;: ${ghibli.producer}</p>
                                 <p class="title" >Año  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.release_date}</p>
                                 <p class="title" >Score &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.rt_score}</p>
                                 </div>`;
        count += 1;
        containerFilms.appendChild(frameFilms);
    });
    document.getElementById('countFilms').innerHTML = count;
    return containerFilms;
};
filmsList(filmsData);


inputSearch.addEventListener('input', () => {
    containerFilms.innerHTML = '';
    filmsList(searchData(filmsData, inputSearch.value));
});

orderBy.addEventListener('change',()=>{
    switch(orderBy.value){
        case 'a-z':
            containerFilms.innerHTML = '';
            filmsList(orderFilms(filmsData, 'a-z'));
            break;
         case 'z-a':
            containerFilms.innerHTML = '';
            const desc = orderFilmsRever(orderFilms(filmsData, 'a-z'));
            filmsList(desc);
             break;   
        default:
    }
});

/*-------------Funcion cargar los select al cargar pagina-------------------*/

/*llenar casillas titulo*/
document.addEventListener("DOMContentLoaded", () => {
    crearSelectorTitle(data)
    crearSelectorDirector(data)
    crearSelectorProducer(data)})

function crearSelectorTitle(data) {
    for (let i = 0; i < filmsData.length; i++) {
        const option = document.createElement('option');
        option.value = data.films[i].title;
        option.text = data.films[i].title;
        byTitle.appendChild(option);
    }}
function crearSelectorDirector(data) {
    const filterDta = filmsData.filter((item, index) => { return filmsData.indexOf(item) === index });
    for (let i = 0; i < filterDta.length; i++) {
        const option = document.createElement('option');
        option.value = filterDta[i].director;
        option.text = filterDta[i].director;
        byDirector.appendChild(option);
    }}

function crearSelectorProducer(data) {
    for (let i = 0; i < filmsData.length; i++) {
        const option = document.createElement('option');
        option.value = data.films[i].producer;
        option.text = data.films[i].producer;
        byProducer.appendChild(option);
    }
}

/*------------------------Funcion filtro por titulo-------------------------*/
byTitle.addEventListener('change', () => {
    if (byTitle.value==="TODOS") {
        containerFilms.innerHTML='';
        filmsList(filmsData);
    } else {
        containerFilms.innerHTML = '';
        filmsList(generalFilter(filmsData, "title", byTitle.value));
    }
});

/*------------------------Funcion filtro por director----------------------*/
byDirector.addEventListener('change', () => {
    if (byDirector.value === "TODOS") {
        containerFilms.innerHTML = '';
        filmsList(filmsData);
    } else {
        containerFilms.innerHTML = '';
        filmsList(generalFilter(filmsData, "director", byDirector.value));
    }
});
/*------------------------Funcion filtro por productor----------------------*/
byProducer.addEventListener('change', () => {
    if (byProducer.value === 'TODOS') {
        containerFilms.innerHTML = '';
        filmsList(filmsData);
    } else {
        containerFilms.innerHTML = '';
        filmsList(generalFilter(filmsData, "producer", byProducer.value));
    }
});


/*------------------------Funcion filtro por año----------------------*/
byYear.addEventListener('input',() =>{
    containerFilms.innerHTML = '';
    filmsList(generalFilter(filmsData, "release_date", byYear.value));

});

/*------------------------Funcion filtro por score----------------------*/
byScore.addEventListener('input', () => {
    containerFilms.innerHTML = '';
    filmsList(generalFilter(filmsData, "rt_score", byScore.value));
});

/*-------------------Funcion del carousel ---------------------*/

function App() { }

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition, slickWidth, track) : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track)
}

let prevAction = (leftPosition, slickWidth, track) => {
    if (leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}
let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
inputSearch.addEventListener('input', () =>{
    const newDataFilter = searchData(filmsData, inputSearch.value);
        containerFilms.innerHTML = '';
        filmsList(newDataFilter);
});


