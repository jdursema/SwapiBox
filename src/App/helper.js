export const fetchCharacterInfo = async() => {
  const fetchPeople = await fetch(`https://swapi.co/api/people/`);
  const peopleData = await fetchPeople.json();
  const people = await fetchHomePlanet(peopleData.results);

  return people;
};

const fetchHomePlanet = (characterArray) => {
  const unresolvedPromises = characterArray.map(async (character) => {
    let homeworldFetch = await fetch(character.homeworld);
    let homeworldData = await homeworldFetch.json();
    let speciesFetch = await fetch(character.species);
    let speciesData = await speciesFetch.json();
    return {name: character.name, data: { homeworld: homeworldData.name, population: homeworldData.population, species: speciesData.name}};
  });
  return Promise.all(unresolvedPromises);
};



