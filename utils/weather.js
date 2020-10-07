const got = require('got');
const apikey = require('../apikey');

// console.log(apikey.weather);
const weather = async (coordinate) => {
  try{

    const url =`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=minutely,hourly&appid=` + apikey.weather + `&units=metric`;
    // console.log(coordinate);
     console.log(url);

    const response = await got(url);
    console.log(response.statusCode);
    //console.log('body: ',response.body);
    const data = JSON.parse(response.body);
    if(data.cod === 400) {
      throw data.message;
    }
    forecast = "It is currently " + data.current.temp + " degrees out," + " with " + data.daily[0].pop*100+'% chance of rain.';
    console.log(forecast);

   } catch (error) {
     console.log(error);
     console.log('Error in Weather API');
   }
}

module.exports.weather = weather;
