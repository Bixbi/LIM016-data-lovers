import { generalFilter , searchData, orderFilms } from '../src/data.js';

const films = [
  {
    title: "Castle in the Sky",
    description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    produce: "Isao Takahata",
    rt_score: "95"
  },
  {
    title: "Only Yesterday",
    description: "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    rt_score: "100"
  }
]

const za = ["Only Yesterday", "Castle in the Sky"];
const title = [
  {
    title: "Only Yesterday",
    description: "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    rt_score: "100"
  }
]
const busc = [
  {
    title: "Castle in the Sky",
    description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    produce: "Isao Takahata",
    rt_score: "95"
  }
]

describe('Pruebas para filtrar', () => {
  it('is a function', () => {
    expect(typeof generalFilter).toBe('function');
  });

  it('returns `generalFilter`', () => {
    expect(generalFilter(films,"title","Only Yesterday")).toBe(title);
  });
});

describe('Pruebas para Buscar', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });

  it('returns `searchData`', () => {
    expect(searchData(films,"CasTle")).toBe(busc);
  });
  
});


describe('Pruebas para ordenar', () => {
  it('is a function', () => {
    expect(typeof orderFilms).toBe('function');
  });

  it('returns `orderFilms`', () => {
    expect(orderFilms(films,"z-a")).toBe(za);
  });
  
});

