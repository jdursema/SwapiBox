export const fetchCharacterInfo = async() => {
  try{
    const fetchPeople = await fetch(`https://swapi.co/api/people/`);
    const peopleData = await fetchPeople.json();
      const unresolvedPromises = peopleData.results.map(async (character) => {
        let homeworldFetch = await fetch(character.homeworld);
        let homeworldData = await homeworldFetch.json();
        let speciesFetch = await fetch(character.species);
        let speciesData = await speciesFetch.json();
        return {name: character.name, data: { homeworld: homeworldData.name, population: homeworldData.population, species: speciesData.name}};
      });
    const people = await Promise.all(unresolvedPromises)

    return people;
    }
    
    catch (ex) {
      const error = new Error('oh no')
      return error 
  }
};




