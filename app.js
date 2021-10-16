const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const userAddress = process.argv[2];

if (!userAddress) {
  console.log('Please enter a valid address');
} else {
  geocode(userAddress, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
