// Init weather object
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather({ mode: 'no-cors' })
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}