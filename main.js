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

      const desc = document.createElement("h2");
      desc.classList.add("bas");
      const pers = document.createElement("h2");
      pers.classList.add("bas");
      const p = document.createElement("p");
      p.style.textAlign = "justify";
      desc.innerHTML = " DESCRIPCIÓN:";
      p.innerHTML = ghibli.description;

      const conter = document.createElement("div");
      conter.classList.add("conter");
      conter.id = "conter";

      const navegacion = document.createElement("div");
      navegacion.classList.add("navegacion");
      navegacion.id = "navegacion";

      const buttonPeople = document.createElement("button");
      buttonPeople.classList.add("bntsecundario");
      buttonPeople.innerText = "PERSONAJES";
      const buttonLocations = document.createElement("button");
      buttonLocations.classList.add("bntsecundario");
      buttonLocations.innerText = "LUGARES";
      const buttonVehicles = document.createElement("button");
      buttonVehicles.classList.add("bntsecundario");
      buttonVehicles.innerText = "VEHICULOS";

      navegacion.appendChild(buttonPeople);
      navegacion.appendChild(buttonLocations);
      navegacion.appendChild(buttonVehicles);

      const conterDos = document.createElement("div");
      conterDos.classList.add("conterDos");
      conterDos.id = "conterDos";

      const tar = document.createElement("div");
      tar.classList.add("tar");
      tar.id = "tar";

      const card = document.createElement("div");
      card.classList.add("card");
      card.id = "card";

      buttonPeople.addEventListener("click", function () {
        pers.innerHTML = " PERSONAJES ";
        const actores = ghibli.people;
        for (let j = 0; j < actores.length; j++) {
          const cardPerfil = document.createElement("div");
          cardPerfil.classList.add("cardPerfil");
          cardPerfil.id = "cardPerfil";

          const cardNombre = document.createElement("div");
          cardNombre.classList.add("cardNombre");
          cardNombre.id = "cardNombre";

          const cardDescripcion = document.createElement("div");
          cardDescripcion.classList.add("cardDescripcion");
          cardDescripcion.id = "cardDescripcion";

          const img = document.createElement("img");
          const hr = document.createElement("hr");
          const nombre = document.createElement("p");
          const sexo = document.createElement("p");
          const ano = document.createElement("p");
          const ojos = document.createElement("p");
          const cabellos = document.createElement("p");
          const especies = document.createElement("p");

          img.src = actores[j].img;
          nombre.textContent = "NOMBRE: " + actores[j].name;
          sexo.textContent = "SEXO :" + actores[j].gender;
          ano.textContent = "AÑOS :" + actores[j].age;
          ojos.textContent = "COLOR DE OJOS :" + actores[j].eye_color;
          cabellos.textContent = "COLOR DE CABELLO :" + actores[j].hair_color;
          especies.textContent = "ESPECIE :" + actores[j].specie;

          cardNombre.appendChild(img);
          cardDescripcion.appendChild(nombre);
          cardDescripcion.appendChild(sexo);
          cardDescripcion.appendChild(ano);
          cardDescripcion.appendChild(ojos);
          cardDescripcion.appendChild(cabellos);
          cardDescripcion.appendChild(especies);

          cardPerfil.appendChild(cardNombre);
          cardPerfil.appendChild(hr);
          cardPerfil.appendChild(cardDescripcion);
          card.appendChild(cardPerfil);
        }
        tar.appendChild(frameFilms);
        tar.appendChild(desc);
        tar.appendChild(p);

        conterDos.appendChild(tar);
        conterDos.appendChild(card);
      });

      buttonVehicles.addEventListener("click", function () {
        pers.innerHTML = " VEHICULOS ";
        card.innerHTML = "";
        const vehiculos = ghibli.vehicles;
        for (let j = 0; j < vehiculos.length; j++) {
          const cardPerfil = document.createElement("div");
          cardPerfil.classList.add("cardPerfil");
          cardPerfil.id = "cardPerfil";

          const cardNombre = document.createElement("div");
          cardNombre.classList.add("cardNombre");
          cardNombre.id = "cardNombre";

          const cardDescripcion = document.createElement("div");
          cardDescripcion.classList.add("cardDescripcion");
          cardDescripcion.id = "cardDescripcion";

          const img = document.createElement("img");
          const hr = document.createElement("hr");
          const nombre = document.createElement("p");
          const descripcion = document.createElement("p");
          const clase = document.createElement("p");
          const tamano = document.createElement("p");

          img.src = vehiculos[j].img;
          nombre.textContent = "NOMBRE: " + vehiculos[j].name;
          descripcion.textContent = "DESCRIPCIÓN :" + vehiculos[j].descripcion;
          clase.textContent = "CLASES :" + vehiculos[j].vehicle_class;
          tamano.textContent = "TAMAÑO :" + vehiculos[j].length;

          const piloto = vehiculos[j].pilot;
          const ul = document.createElement("ul");
          const li = document.createElement("li");
          ul.textContent = "PILOTO: ";
          li.textContent = piloto.name;
          ul.appendChild(li);

          cardNombre.appendChild(img);
          cardDescripcion.appendChild(nombre);
          cardDescripcion.appendChild(descripcion);
          cardDescripcion.appendChild(clase);
          cardDescripcion.appendChild(tamano);
          cardDescripcion.appendChild(ul);
          cardDescripcion.appendChild(li);

          cardPerfil.appendChild(cardNombre);
          cardPerfil.appendChild(hr);
          cardPerfil.appendChild(cardDescripcion);
          card.appendChild(cardPerfil);
        }
        tar.appendChild(frameFilms);
        tar.appendChild(desc);
        tar.appendChild(p);

        conterDos.appendChild(tar);
        conterDos.appendChild(card);
      });

      buttonLocations.addEventListener("click", function () {
        pers.innerHTML = " LOCACIÓN ";
        card.innerHTML = "";
        const lugares = ghibli.locations;
        for (let j = 0; j < lugares.length; j++) {
          const cardPerfil = document.createElement("div");
          cardPerfil.classList.add("cardPerfil");
          cardPerfil.id = "cardPerfil";

          const cardNombre = document.createElement("div");
          cardNombre.classList.add("cardNombre");
          cardNombre.id = "cardNombre";

          const cardDescripcion = document.createElement("div");
          cardDescripcion.classList.add("cardDescripcion");
          cardDescripcion.id = "cardDescripcion";

          const img = document.createElement("img");
          const hr = document.createElement("hr");
          const nombre = document.createElement("p");
          const descripcion = document.createElement("p");
          const clase = document.createElement("p");
          const tamano = document.createElement("p");

          img.src = lugares[j].img;
          nombre.textContent = "NOMBRE: " + lugares[j].name;
          descripcion.textContent = "DESCRIPCIÓN :" + lugares[j].climate;
          clase.textContent = "CLASES :" + lugares[j].terrain;
          tamano.textContent = "TAMAÑO :" + lugares[j].surface_water;

          cardNombre.appendChild(img);
          cardDescripcion.appendChild(nombre);
          cardDescripcion.appendChild(descripcion);
          cardDescripcion.appendChild(clase);
          cardDescripcion.appendChild(tamano);

          const ul = document.createElement("ul");
          ul.textContent = "RESIDENTES: ";
          const resident = lugares[j].residents;
          for (let i = 0; i < resident.length; i++) {
            if (resident[i] === "TODO") {
              const li = document.createElement("li");
              li.textContent = resident[i];
              cardDescripcion.appendChild(ul);
              cardDescripcion.appendChild(li);
            } else {
              const li = document.createElement("li");
              li.textContent = resident[i];
              cardDescripcion.appendChild(ul);
              cardDescripcion.appendChild(li);
            }
          }
          cardPerfil.appendChild(cardNombre);
          cardPerfil.appendChild(hr);
          cardPerfil.appendChild(cardDescripcion);
          card.appendChild(cardPerfil);
        }
        tar.appendChild(frameFilms);
        tar.appendChild(desc);
        tar.appendChild(p);

        conterDos.appendChild(tar);
        conterDos.appendChild(card);
      });
      conter.appendChild(navegacion);
      conter.appendChild(pers);
      conter.appendChild(conterDos);

      containerFilms.appendChild(conter);
    });
    count += 1;
    containerFilms.appendChild(frameFilms);
  });
  document.getElementById("countFilms").style.display = "block";
  document.getElementById("countFilms").innerHTML =
    "TOTAL PELÍCULAS : " + count;
  return containerFilms;
};
filmsList(filmsData);

inputSearch.addEventListener("input", () => {
  containerFilms.innerHTML = "";
  filmsList(searchData(filmsData, inputSearch.value));
  for (let i = 0, l = byTitle.length; i < l; i++) {
    byTitle[i].selected = byTitle[i].defaultSelected;
  }
  for (let i = 0, l = byDirector.length; i < l; i++) {
    byDirector[i].selected = byDirector[i].defaultSelected;
  }
  for (let i = 0, l = byProducer.length; i < l; i++) {
    byProducer[i].selected = byProducer[i].defaultSelected;
  }
});

orderBy.addEventListener("change", () => {
  let orden = orderBy.value;
  // eslint-disable-next-line
  switch (orden) {
    case "a-z":
      containerFilms.innerHTML = "";
      filmsList(orderFilms(filmsData, "a-z"));
      break;
    case "z-a":
      containerFilms.innerHTML = "";
      // eslint-disable-next-line
      const desc = orderFilmsRever(orderFilms(filmsData, "a-z"));
      filmsList(desc);
      break;
  }
  for (let i = 0, l = byTitle.length; i < l; i++) {
    byTitle[i].selected = byTitle[i].defaultSelected;
  }
  for (let i = 0, l = byDirector.length; i < l; i++) {
    byDirector[i].selected = byDirector[i].defaultSelected;
  }
  for (let i = 0, l = byProducer.length; i < l; i++) {
    byProducer[i].selected = byProducer[i].defaultSelected;
  }
});

/*----------------------------Funcion cargar pagina del Login------------------------------*/

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

function crearSelectorDirector() {
  const filterDta = filmsData.filter((item, index) => {
    return filmsData.indexOf(item) === index;
  });
  // eslint-disable-next-line
  const setObj = new Set(filterDta);
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

function crearSelectorProducer() {
  const filterDta = filmsData.filter((item, index) => {
    return filmsData.indexOf(item) === index;
  });
  // eslint-disable-next-line
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
    for (let i = 0, l = byDirector.length; i < l; i++) {
      byDirector[i].selected = byDirector[i].defaultSelected;
    }
    for (let i = 0, l = byProducer.length; i < l; i++) {
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
    for (let i = 0, l = byTitle.length; i < l; i++) {
      byTitle[i].selected = byTitle[i].defaultSelected;
    }
    for (let i = 0, l = byProducer.length; i < l; i++) {
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
    for (let i = 0, l = byTitle.length; i < l; i++) {
      byTitle[i].selected = byTitle[i].defaultSelected;
    }
    for (let i = 0, l = byDirector.length; i < l; i++) {
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
