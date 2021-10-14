const request = require('request');

// const url =
//   'http://api.weatherstack.com/current?access_key=7fab56536bd5d538514aaa601d64c832&query=37.8270,-122.4230&units=f';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service.');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
//     );
//   }
// });
//Address -> Lat/Long -> Weather

const geocoding =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmNvZGVyczIwMjEiLCJhIjoiY2t1b3VhaDFlMHh1MzMwbGlibWU3ejB3NyJ9.lkWLNWn0Bq2f9HDHf-M9Wg&limit=1';

// const geocodingError =
//   // Used to create a fake error to test error handling function

//   'https://api.mapbox.com/geocoding/v5/mapbox.places/12332j.json?access_token=pk.eyJ1IjoicmNvZGVyczIwMjEiLCJhIjoiY2t1b3VhaDFlMHh1MzMwbGlibWU3ejB3NyJ9.lkWLNWn0Bq2f9HDHf-M9Wg&limit=1';

request({ url: geocoding, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to server and provide result.');
  } else if (response.body.features.length === 0) {
    console.log('No Match Found!');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
