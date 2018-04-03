class Weather {
    constructor(city, state) {
            this.apiKey = '209b370b4bdeb224';
            this.city = city;
            this.state = state;
        }
        // Fetch weather from API
    async getWeather() {
            const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}}/conditions/q/${this.state}/${this.city}.json`);

            const reposeData = await response.json();

            return responseData.current_observation;
        }
        // Change Weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}