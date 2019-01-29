// Weather Api

class Weather {

    constructor(city) {

        this.apiKey     =   '0b8274ecac16484e9f9003f527449ec6';
        this.city       =   city;
    }

    async getWeather() {

        const response =  await  fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.apiKey}`);

        const responseData  =   await response.json();

        return responseData.data[0];

    }

    changeLocation(city) {
        this.city   =   city;
    }

}