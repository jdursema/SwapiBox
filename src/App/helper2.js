export const fetchVehicleInfo = async() => {
  const fetchVehicles = await fetch(`https://swapi.co/api/vehicles/`);
  const vehicleData = await fetchVehicles.json();
  const vehicleObjArray = await createVehicleObj(vehicleData.results);

  return vehicleObjArray;
};

const createVehicleObj = (vehicleArray) => {
  const unresolvedPromises = vehicleArray.map( (vehicle) => {
    return {name: vehicle.name, data: {model: vehicle.model, class: vehicle.vehicle_class, capacity: vehicle.passengers}};
  });
  return Promise.all(unresolvedPromises);
};