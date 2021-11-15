import data from './data/ghibli/ghibli.js';


/*
filterData(data, condition): esta función filter o filtrar recibiría la data, 
y nos retornaría aquellos datos que sí cumplan con la condición.
*/
export const filterData = (description, input) => {
  const newArr = data.films.filter(function (newArray) {
    return (newArray[description] === input);
  });
  return newArr;
};


export const searchData = (arrayObj, input) => {

  const array = arrayObj.filter(pre => pre.title.toLowerCase().startsWith(input.toLowerCase()));
  return array;
};


