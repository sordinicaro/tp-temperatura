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

export {Weather, Location, ValuesMinutely}