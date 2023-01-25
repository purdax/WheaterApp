class Weather {
    constructor(city) {
        this.apiKey = '052aaab32529400abfe115055231801';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no
        `);
        const responseData = await response.json();

        return responseData;
    }


    // Change weather location
    changeLocation(city) {
        this.city = city;
        console.log(city);
    }
}
