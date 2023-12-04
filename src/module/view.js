export const generateCards = (arrayAnimals) => {
  const cards = arrayAnimals.map((animal) => {
    return `
        <div class="card" data-name="${animal.name}">
            <img src="${animal.image}" alt="${animal.name}" />
        </div>
        `;
  });

  return cards.join("");
};
