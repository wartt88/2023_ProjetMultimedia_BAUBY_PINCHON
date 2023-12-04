import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

export const getImage = async (category) => {
  return faker.image.urlLoremFlickr({ category: category });
};

export const getListOfAnimal = async (number, animalRecherched) => {
  const animals = [
    {
      name: animalRecherched,
      image: await getImage(animalRecherched),
    },
  ];

  const dataCopy = [...data];
  for (let i = 1; i < number; i++) {
    const rdm = Math.floor(Math.random() * dataCopy.length);
    const animal = dataCopy.splice(rdm, 1)[0];
    animals.push({
      name: animal.en,
      image: await getImage(animal.en),
    });
  }
  // shuffle
  animals.sort(() => Math.random() - 0.5);
  return animals;
};

export const data = [];

export const initData = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      console.log("json", json);
      data.push(...json);
    });
};
