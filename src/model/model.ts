import jsonfile from "jsonfile";
import { pathFile } from "../database";
import *  as interfaces from "../interfaces/interfaces"


//const getAllCharacters = (): Charater[] => jsonfile.readFileSync(pathFile);

interface Weather{
    timelines: DataMinutely[] //| hourly,
    location: Location
}

interface Location {
    lat : number,
    lon: number
}

interface ValuesMinutely  {
      "cloudBase": number,
      "cloudCeiling": number | null,
      "cloudCover": number,
      "dewPoint": number,
      "freezingRainIntensity": number,
      "humidity": number,
      "precipitationProbability": number,
      "pressureSurfaceLevel": number,
      "rainIntensity": number,
      "sleetIntensity": number,
      "snowIntensity": number,
      "temperature": number,
      "temperatureApparent": number,
      "uvHealthConcern": number,
      "uvIndex": number,
      "visibility": number,
      "weatherCode": number,
      "windDirection":number,
      "windGust": number,
      "windSpeed": number
  }

interface DataMinutely {
    time: string,
    values: ValuesMinutely
  }

const getDataWeather = (): Weather => jsonfile.readFileSync(pathFile);
// FUNCION PARA DEVOLVER TODO LO DE DATABASE
const getDataWeather = (): interfaces.Weather => jsonfile.readFileSync(pathFile);
const clima = getDataWeather()
console.log(clima);