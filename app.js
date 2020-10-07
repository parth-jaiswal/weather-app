/*
>install got
>require the module
>store the api url into an url variable
>abstraction, storing functions in modules
>chaining: output of geocode is the input of weather
>
>
>
>
>
>
*/

const got = require('got');
const apikey = require('./apikey');
const geocode = require('./utils/geocode.js');
const weather = require('./utils/weather')
//console.log(apikey);

const printForecast = async ()=>{weather.weather(await(geocode.geocode()));}
printForecast();
//weather(url)
