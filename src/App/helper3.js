export const fetchPlanetInfo = async() => {
  const fetchPlanets = await fetch(`https://swapi.co/api/planets/`);
  const planetsData = await fetchPlanets.json();
  const planetObjArray = await createPlanetObj(planetsData.results);

  return planetObjArray;
};


const createPlanetObj = (planetArray) => {
  const unresolvedPromises = planetArray.map( async (planet) => {
    const fetchedResidents = await fetchResidents(planet.residents);
    return {name: planet.name, type: 'planet-card', data: {Terrain: planet.terrain, Population: planet.population, Climate: planet.climate, Residents: fetchedResidents.join(',\n')}};
  });
  return Promise.all(unresolvedPromises);
};

const fetchResidents = (apiArray) => {
  const unresolvedPromises = apiArray.map(async (api)=>{
    const fetchResident = await fetch(api);
    const residentData = await fetchResident.json();
    return residentData.name;
  }); 
  
  return Promise.all(unresolvedPromises);
};