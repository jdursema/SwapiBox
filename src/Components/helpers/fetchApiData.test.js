/*eslint-disable*/
import { fetchCharacterInfo } from './helper';
import { fetchVehicleInfo } from './helper2';
import { fetchPlanetInfo } from './helper3';
import { fetchscrollingOpening } from './helper4';
import mockApiResponse from './mockApiResponse';
const { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse, mockOpeningApiResponse } = mockApiResponse;

describe('fetch function tests', () =>{
  beforeEach(() => {
    window.fetch =
    jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: mockPeopleApiResponse.results}
        )
  }))  
});

it('People fetch is called with the correct params', () => {
  const expected =[
      'https://swapi.co/api/people/'
    ];
    fetchCharacterInfo();

    expect(window.fetch).toBeCalledWith(...expected);
  });

  it('People fetch should return the correct object', () => {
    const expectedResponse = 
    [{"Data": {
      "Homeworld": undefined,
      "Population": undefined,
      "Species": undefined}, 
    "name": "Luke Skywalker", 
    "type": "people-card"}]

    expect(fetchCharacterInfo()).resolves.toEqual(expectedResponse);
  })

  it('People fetch should throw an error if it hits the catch', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    const expectedError = Error('oh no');
    const getPeopleData = await fetchCharacterInfo();

    expect(getPeopleData).toEqual(expectedError);
  });
});

describe('fetch function tests', () =>{
  beforeEach(() => {
    window.fetch =
    jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: mockVehicleApiResponse.results}
        )
  }))  
});

it('Vehicle fetch is called with the correct params', () => {
  const expected =[
      'https://swapi.co/api/vehicles/'
    ];
    fetchVehicleInfo();

    expect(window.fetch).toBeCalledWith(...expected);
  });

  it('Vehicle fetch should return the correct object', () => {
    const expectedResponse = 
    [{"Data": 
      {"Capacity": "30", 
      "Class": "wheeled", 
      "Model": "Digger Crawler"}, 
    "name": "Sand Crawler", 
    "type": "vehicle-card"}]

    expect(fetchVehicleInfo()).resolves.toEqual(expectedResponse);
  })

  it('Vehicle fetch should throw an error if it hits the catch', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    const expectedError = Error('oh no');
    const getVehicleData = await fetchVehicleInfo();

    expect(getVehicleData).toEqual(expectedError);
  });

  
});

describe('fetch function tests', () => {
  beforeEach(() => {
    window.fetch =
    jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: mockPlanetApiResponse.results}
        )
  }))  
});

it('Planet fetch is called with the correct params', () => {
  const expected =[
      'https://swapi.co/api/planets/'
    ];
    fetchPlanetInfo();

    expect(window.fetch).toBeCalledWith(...expected);
  });

  it('Vehicle fetch should return the correct object', () => {
    const expectedResponse = 
    [{"Data": {
      "Capacity": undefined, 
      "Class": undefined, 
      "Model": undefined}, 
    "name": "Alderaan", 
    "type": "vehicle-card"}]

    expect(fetchVehicleInfo()).resolves.toEqual(expectedResponse);
  })

  it('Vehicle fetch should throw an error if it hits the catch', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    const expectedError = Error('oh no');
    const getPlanetData = await fetchPlanetInfo();

    expect(getPlanetData).toEqual(expectedError);
  });

});