// Weather Api

class Weather {

    constructor(lat = '32.8808789', lon = '-6.9523989', city) {

        this.apiKey     =   '0b8274ecac16484e9f9003f527449ec6';
        this.lat        =   lat;
        this.lon        =   lon;
        this.city       =   city;
    }

    async getWeather() {

        const response =  await  fetch(`https://api.weatherbit.io/v2.0/current?${!this.city ? '&lat=' + this.lat + '&lon=' + this.lon : 'city=' + this.city}&key=${this.apiKey}`);
 
        const responseData  =   await response.json();

        return responseData.data[0];

    }

    changeLocation(city) {

        this.city       =   city;
    }

}