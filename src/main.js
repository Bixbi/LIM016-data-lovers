import data from "./data/ghibli/ghibli.js";
import {
  searchData,
  orderFilms,
  orderFilmsRever,
  generalFilter,
} from "./data.js";

const filmsData = data.films;
const containerFilms = document.querySelector("#containerFilms");
const inputSearch = document.getElementById("searchFilms");
const orderBy = document.querySelector("#order-by");
const byTitle = document.querySelector("#byTitle");
const byDirector = document.querySelector("#byDirector");
const byProducer = document.querySelector("#byProducer");
const byYear = document.getElementById("byYear");
const byScore = document.getElementById("byScore");

/*-------------Funcion cargar los select al cargar pagina-------------------*/
const filmsList = (list) => {
  let count = 0;
  list.forEach((ghibli) => {
    const frameFilms = document.createElement("div");
    frameFilms.className = "filmsGroup";
    frameFilms.innerHTML = `<div class="detalle-films">
                                 <img src="${ghibli.poster}">
                                 <hr>
                                 <p class="title" >Título &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.title}</p>
                                 <p class="title" >Director &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.director}</p>
                                 <p class="title" >Productor &nbsp;: ${ghibli.producer}</p>
                                 <p class="title" >Año  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.release_date}</p>
                                 <p class="title" >Score &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${ghibli.rt_score}</p>
                                 </div>`;

    frameFilms.addEventListener("click", () => {
      document.getElementById("countFilms").style.display = "none";
      containerFilms.innerHTML = "";
      frameFilms.style.position = "absolute";
      frameFilms.style.left = "20px";
      frameFilms.style.display = "flex";
      const infopeli = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      const buttonPeople = document.createElement("button");
      const buttonLocations = document.createElement("button");
      const buttonVehicles = document.createElement("button");

      infopeli.className = "infopeli";
      h1.innerHTML = " DESCRIPCIÓN:";
      p.innerHTML = ghibli.description;
      h1.innerHTML = " PERSONAJES ";
      buttonPeople.innerText = "PERSONAJES";
      buttonLocations.innerText = "LUGARES";
      buttonVehicles.innerText = "VEHICULOS";

      infopeli.appendChild(p);
      infopeli.appendChild(h1);
      infopeli.appendChild(buttonPeople);
      infopeli.appendChild(buttonLocations);
      infopeli.appendChild(buttonVehicles);

      buttonPeople.addEventListener("click", function () {
        const actores = ghibli.people;
        for (let j = 0; j < actores.length; j++) {
          const hr = document.createElement("hr");
          const img = document.createElement("img");
          const h4 = document.createElement("h4");
          const h41 = document.createElement("h4");
          const h42 = document.createElement("h4");
          const h43 = document.createElement("h4");
          const h44 = document.createElement("h4");
          const h45 = document.createElement("h4");
          h4.textContent = "NOMBRE: " + actores[j].name;
          h41.textContent = "SEXO :" + actores[j].gender;
          h42.textContent = "AÑOS :" + actores[j].age;
          h43.textContent = "COLOR DE OJOS :" + actores[j].eye_color;
          h44.textContent = "COLOR DE CABELLO:" + actores[j].hair_color;
          h45.textContent = "ESPECIE :" + actores[j].specie;
          img.src = actores[j].img;

          infopeli.appendChild(hr);
          infopeli.appendChild(h4);
          infopeli.appendChild(img);
          infopeli.appendChild(h41);
          infopeli.appendChild(h42);
          infopeli.appendChild(h43);
          infopeli.appendChild(h44);
          infopeli.appendChild(h45);
        }
      });

      buttonVehicles.addEventListener("click", function () {
        infopeli.innerHTML = "";
        const vehiculos = ghibli.vehicles;
        for (let j = 0; j < vehiculos.length; j++) {
          const hr = document.createElement("hr");
          const h4 = document.createElement("h4");
          const h41 = document.createElement("h4");
          const h42 = document.createElement("h4");
          const h43 = document.createElement("h4");

          h4.textContent = "NOMBRE: " + vehiculos[j].name;
          const img = document.createElement("img");
          h41.textContent = "DESCRIPCIÓN :" + vehiculos[j].description;
          h42.textContent = "CLASE :" + vehiculos[j].vehicle_class;
          h43.textContent = "TAMAÑO:" + vehiculos[j].length;

          const piloto = vehiculos[j].pilot;
          const ul = document.createElement("ul");
          const li = document.createElement("li");
          ul.textContent = "PILOTO :";
          li.textContent = piloto.name;
          ul.appendChild(li);
          img.src = vehiculos[j].img;

          infopeli.appendChild(hr);
          infopeli.appendChild(h4);
          infopeli.appendChild(img);
          infopeli.appendChild(h41);
          infopeli.appendChild(h42);
          infopeli.appendChild(h43);
          infopeli.appendChild(ul);
          infopeli.appendChild(li);
        }
      });

      buttonLocations.addEventListener("click", function () {
        infopeli.innerHTML = "";
        const lugares = ghibli.locations;
        for (let j = 0; j < lugares.length; j++) {
          const hr = document.createElement("hr");
          const h4 = document.createElement("h4");
          const h41 = document.createElement("h4");
          const h42 = document.createElement("h4");
          const h43 = document.createElement("h4");

          h4.textContent = "NOMBRE: " + lugares[j].name;
          const img = document.createElement("img");
          h41.textContent = "DESCRIPCIÓN :" + lugares[j].climate;
          h42.textContent = "CLASE :" + lugares[j].terrain;
          h43.textContent = "TAMAÑO:" + lugares[j].surface_water;
          img.src = lugares[j].img;
          
          infopeli.appendChild(hr);
          infopeli.appendChild(h4);
          infopeli.appendChild(img);
          infopeli.appendChild(h41);
          infopeli.appendChild(h42);
          infopeli.appendChild(h43);
          const ul = document.createElement("ul");
          ul.textContent = "RESIDENTES :";
          const resident = lugares[j].residents;
          
          for (var i = 0; i < resident.length; i++) {
            if (resident[i]==='TODO') {
              const li = document.createElement("li");
              li.textContent = resident[i];
              infopeli.appendChild(ul);
              infopeli.appendChild(li);
            } else {
              const li = document.createElement("li");
              li.textContent = resident[i].name;
              infopeli.appendChild(ul);
              infopeli.appendChild(li);
            }
          }
        }
      });
      containerFilms.appendChild(frameFilms);
      containerFilms.appendChild(infopeli);
    });
    count += 1;
    containerFilms.appendChild(frameFilms);
  });
  document.getElementById("countFilms").style.display = "block";
  document.getElementById("countFilms").innerHTML = 'TOTAL PELÍCULAS : ' + count;
  return containerFilms;
};
filmsList(filmsData);

inputSearch.addEventListener("input", () => {
  containerFilms.innerHTML = "";
  filmsList(searchData(filmsData, inputSearch.value));
  for (var i = 0, l = byTitle.length; i < l; i++) {
    byTitle[i].selected = byTitle[i].defaultSelected;
  }
  for (var i = 0, l = byDirector.length; i < l; i++) {
    byDirector[i].selected = byDirector[i].defaultSelected;
  }
  for (var i = 0, l = byProducer.length; i < l; i++) {
    byProducer[i].selected = byProducer[i].defaultSelected;
  }
});

orderBy.addEventListener("change", () => {
  switch (orderBy.value) {
    case "a-z":
      containerFilms.innerHTML = "";
      filmsList(orderFilms(filmsData, "a-z"));
      break;
    case "z-a":
      containerFilms.innerHTML = "";
      const desc = orderFilmsRever(orderFilms(filmsData, "a-z"));
      filmsList(desc);
      break;
    default:
  }
  for (var i = 0, l = byTitle.length; i < l; i++) {
    byTitle[i].selected = byTitle[i].defaultSelected;
  }
  for (var i = 0, l = byDirector.length; i < l; i++) {
    byDirector[i].selected = byDirector[i].defaultSelected;
  }
  for (var i = 0, l = byProducer.length; i < l; i++) {
    byProducer[i].selected = byProducer[i].defaultSelected;
  }
});

/*-------------Funcion cargar los select al cargar pagina-------------------*/
document.addEventListener("DOMContentLoaded", () => {
  crearSelectorTitle(data);
  crearSelectorDirector(data);
  crearSelectorProducer(data);
});

function crearSelectorTitle(data) {
  for (let i = 0; i < filmsData.length; i++) {
    const option = document.createElement("option");
    option.value = data.films[i].title;
    option.text = data.films[i].title;
    byTitle.appendChild(option);
  }
}

function crearSelectorDirector(data) {
  const filterDta = filmsData.filter((item, index) => {
    return filmsData.indexOf(item) === index;
  });
  const setObj = new Set(); 
  const unicos = filterDta.reduce((acc, nuevo) => {
    if (!setObj.has(nuevo.director)) {
      setObj.add(nuevo.director, nuevo);
      acc.push(nuevo);
    }
    return acc;
  }, []);

  for (let i = 0; i < unicos.length; i++) {
    const option = document.createElement("option");
    option.value = unicos[i].director;
    option.text = unicos[i].director;
    byDirector.appendChild(option);
  }
}

function crearSelectorProducer(data) {
  const filterDta = filmsData.filter((item, index) => {
    return filmsData.indexOf(item) === index;
  });
  const setObj = new Set(); 
  const unicos = filterDta.reduce((acc, nuevo) => {
    if (!setObj.has(nuevo.producer)) {
      setObj.add(nuevo.producer, nuevo);
      acc.push(nuevo);
    }
    return acc;
  }, []);
  for (let i = 0; i < unicos.length; i++) {
    const option = document.createElement("option");
    option.value = unicos[i].producer;
    option.text = unicos[i].producer;
    byProducer.appendChild(option);
  }
}

inputSearch.addEventListener("input", () => {
  const newDataFilter = searchData(filmsData, inputSearch.value);
  containerFilms.innerHTML = "";
  filmsList(newDataFilter);
});

/*------------------------Funcion filtro por titulo-------------------------*/
byTitle.addEventListener("change", () => {
  if (byTitle.value === "TODOS") {
    containerFilms.innerHTML = "";
    filmsList(filmsData);
  } else {
    containerFilms.innerHTML = "";
    inputSearch.value = "";
    filmsList(generalFilter(filmsData, "title", byTitle.value));
    for (var i = 0, l = byDirector.length; i < l; i++) {
      byDirector[i].selected = byDirector[i].defaultSelected;
    }
    for (var i = 0, l = byProducer.length; i < l; i++) {
      byProducer[i].selected = byProducer[i].defaultSelected;
    }
  }
});

/*------------------------Funcion filtro por director----------------------*/
byDirector.addEventListener("change", () => {
  if (byDirector.value === "TODOS") {
    containerFilms.innerHTML = "";
    filmsList(filmsData);
  } else {
    containerFilms.innerHTML = "";
    inputSearch.value = "";
    filmsList(generalFilter(filmsData, "director", byDirector.value));
    for (var i = 0, l = byTitle.length; i < l; i++) {
      byTitle[i].selected = byTitle[i].defaultSelected;
    }
    for (var i = 0, l = byProducer.length; i < l; i++) {
      byProducer[i].selected = byProducer[i].defaultSelected;
    }
  }
});
/*------------------------Funcion filtro por productor----------------------*/
byProducer.addEventListener("change", () => {
  if (byProducer.value === "TODOS") {
    containerFilms.innerHTML = "";
    filmsList(filmsData);
  } else {
    containerFilms.innerHTML = "";
    inputSearch.value = "";
    filmsList(generalFilter(filmsData, "producer", byProducer.value));
    for (var i = 0, l = byTitle.length; i < l; i++) {
      byTitle[i].selected = byTitle[i].defaultSelected;
    }
    for (var i = 0, l = byDirector.length; i < l; i++) {
      byDirector[i].selected = byDirector[i].defaultSelected;
    }
  }
});

/*------------------------Funcion filtro por año----------------------*/
byYear.addEventListener("input", () => {
  containerFilms.innerHTML = "";
  filmsList(generalFilter(filmsData, "release_date", byYear.value));
});

/*------------------------Funcion filtro por score----------------------*/
byScore.addEventListener("input", () => {
  containerFilms.innerHTML = "";
  filmsList(generalFilter(filmsData, "rt_score", byScore.value));
});


