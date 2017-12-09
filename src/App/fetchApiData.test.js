import { fetchCharacterInfo } from './helper';
import { fetchVehicleInfo } from './helper2';
import { fetchPlanetInfo } from './helper3'
import mockApiResponse from './mockApiResponse';
const { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse } = mockApiResponse;

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

it('fetch is called with the correct params', () => {
  const expected =[
      'https://swapi.co/api/people/'
    ];
    fetchCharacterInfo();

    expect(window.fetch).toBeCalledWith(...expected);
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
});