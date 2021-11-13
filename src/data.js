import data from './data/ghibli/ghibli.js';


/*
filterData(data, condition): esta función filter o filtrar recibiría la data, 
y nos retornaría aquellos datos que sí cumplan con la condición.
*/
export const filterData = (descripcion, condition) => {
  let newArr = data.films.filter(function (newArray) {
    return (newArray[descripcion] === condition);
  });
  return newArr;
};
