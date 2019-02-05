// Weather Api

class Weather {

    constructor(apiKey, ip, city) {

        this.apiKey     =   apiKey;
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