// Weather Api

class Weather {

    constructor(ip, city) {

        this.apiKey     =   '0b8274ecac16484e9f9003f527449ec6';
        this.ip         =   ip;
        this.city       =   city;
    }

    async getWeather() {

        const response =  await  fetch(`https://api.weatherbit.io/v2.0/current?${!this.city ? '&ip=' + this.ip : 'city=' + this.city}&key=${this.apiKey}`);
 
        const responseData  =   await response.json();

        return responseData.data[0];

    }

    changeLocation(city) {

        this.city       =   city;
    }

}