import { rapidapiKey, weatherUrl } from '../config/auth';
import axios from 'axios';

export const getTemperature = async (date) => {
  const config = {
    method: 'get',
    url: `${weatherUrl}?lat=-34.6083&lon=-58.3712&lang=es&units=metric`,
    headers: {
      'x-rapidapi-key': rapidapiKey,
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      useQueryString: 'true',
    },
  };
  try {
    var initialDate = new Date();
    var endDate = new Date(date);
    var diffDays = endDate.getTime() - initialDate.getTime();
    var diff = Math.round(diffDays / (1000 * 60 * 60 * 24));

    const { data } = await axios(config);
    const list = data.list;

    const day = list[diff];
    return day.temp.day;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};
