// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocateion = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocateion.city);

// Init UI
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
       
    // Change location
    weather.changeLocation(city);


    // Set location in LS
    storage.setLocationData(city);

    // Get and display weather
    getWeather();
});



function getWeather() {
   weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
