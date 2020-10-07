const got = require('got');
const apikey = require('../apikey');
const process = require('process')
const mapurl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${process.argv[2]}.json?access_token=` + apikey.map +"&limit=1";

const geocode = async ()=>{
  try {
    const mapResponse = await got(mapurl);
    console.log(mapResponse.statusCode);
    const mapData = JSON.parse(mapResponse.body);
    if(mapResponse.body.error) {
      throw mapData.message;
    }
    mapOutput = mapData.features[0].place_name+" Latitude: "+mapData.features[0].center[0]+" Longitude "+ mapData.features[0].center[1];
    const returnData = {
      lon: mapData.features[0].center[0],
      lat: mapData.features[0].center[1]
    }
    // console.log(mapOutput);
    return returnData;
  } catch (error) {
    console.log("Error in Geocoding", error);
  }
}

module.exports.geocode = geocode;
