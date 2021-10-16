Weather App - Tutorial app code along with Andrew Mead

Oct 9th, 2021

- learned how to install npm 'request' module
- learned how to create requests from weatherstack.com using request function
- reviewed documentation on using JSON parsing within the request module
- Challenge: Print weather conditions (ie. Partly-Cloudy, Sunny, Overcast, etc), current temp and feels like temp.

Oct 12th, 2021

- set up Mapbox account
- learned what Forward/Reverse geocoding is
- Challenge: Print latitude/longitude of Los Angeles

Oct 14th, 2021

- learned about error handling for low level errors and 'no match' result errors.
- Challenge: create my own error handling, test by disabling network, setup error handling for search results that come back with nothing, then test by altering search result.
- create README.md file
- upload current app.js to GITHUB

Oct 16th, 2021

- created a utils folder to hold reusable .js code files
- created geocode.js file, refactored code as per follow along in video(callback functions and call back chaining)
- Challenge (solo): created forecast.js file, refactored existing code into callback functions, linked request module to file, export module to app.js, link app.js to forecast.js file.
- learned how to refactor callbacks in app.js file as callback chaining instead. (video code-along)
- Challenge (solo):
  - Googled how to access line arguements without using yargs module.
  - created a variable to store user input address with the process.argv[] syntax.
  - called that variable within callback to pull weather data that user requested in command line arguement.
  - used an if/else state prompting end-user to enter a valid address if no address was entered the first time.
  - git add/commit/push the following: app.js, geocode.js, forecast.js files to GITHUB.
  - update README.md file.
  - git add/commit/push README.md
