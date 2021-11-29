/*------------------------Funcion filtrado general-------------------------*/
export const generalFilter = (arrayObj, property, condition) => {
  const generalDataFilter = arrayObj.filter(obj => obj[property].includes(condition));
  return generalDataFilter;
};

/*---------------Funcion buscar tanto mayusculas y minusculas----------------*/
export const searchData = (arrayObj, input) => {
  const array = arrayObj.filter(pre => pre.title.toLowerCase().startsWith(input.toLowerCase()));
  return array;
};

/*--------------------------Funcion ordenar A-Z ------------------------------*/
export const orderFilms = (arrayObj, orderBy) => {
  let sortObj = [];
  switch (orderBy) {
    case 'a-z':
      sortObj = arrayObj.sort((a, b) => ((a.title <= b.title) ? -1 : 1));
      break;
    default:
  }
  return sortObj;
};
export const orderFilmsRever = array => array.reverse();


