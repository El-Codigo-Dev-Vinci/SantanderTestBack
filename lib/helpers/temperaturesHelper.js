import { rapidapiKey, weatherUrl } from '../config/auth';
import axios from 'axios';

export const getTemperature = async (date) => {
  const stDate = Date.parse(date) / 1000;
  const config = {
    method: 'get',
    url: `${weatherUrl}?lat=-34.6083&lon=-58.3712&dt=${stDate}`,
    headers: {
      'x-rapidapi-key': rapidapiKey,
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      useQueryString: 'true',
    },
  };
  const { temp } = await (await axios(config)).data.current;
  return (temp - 270).toFixed(2);
};
