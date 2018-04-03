// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather({ mode: 'no-cors' })
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));
}