// get ip adress

class IP {

    async getIpAdress () {

        const response   =   await fetch('https://api.ipify.org/?format=json');

        const respondeData  =   await response.json();

        return respondeData;

    }
}
// storage

class Store {

    constructor () {
        this.city;
    }

    getLocationData() {
        if(localStorage.getItem('City')   === null) {

            this.city   =   '';
        } else {
            this.city   =   localStorage.getItem('City');
        }

        return {
            city:   this.city
        }
    }

    setLocationData(city) {
        localStorage.setItem('City', city);
    }

}
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
// UI

class UI {

    constructor() {
        this.location   =   document.getElementById('location');
        this.desc   =   document.getElementById('desc');
        this.string   =   document.getElementById('string');
        this.details   =   document.getElementById('details');
        this.icon   =   document.getElementById('icon');
        this.humidity   =   document.getElementById('humidity');
        this.feelsLike   =   document.getElementById('feels-like');
        this.dewpoint   =   document.getElementById('dewpoint');
        this.wind   =   document.getElementById('wind');
        this.clouds   =   document.getElementById('clouds');
    }

    print(weather) {
        this.location.textContent   =   weather.city_name + ', ' + weather.country_code;
        this.desc.textContent       =   weather.weather.description;
        this.string.textContent     =   weather.temp + ' °';
        this.icon.setAttribute('src', 'https://www.weatherbit.io/static/img/icons/' + weather.weather.icon + '.png');
        this.humidity.textContent   =   `Relative humidity: ${weather.rh} %`;
        this.feelsLike.textContent   =   `Feels like: ${weather.app_temp} F`;
        this.dewpoint.textContent   =   `Dew point : ${weather.dewpt} F`;
        this.wind.textContent   =   `Wind: From the ${weather.wind_cdir} at ${weather.wind_dir} MPH Gusting to ${weather.wind_spd} MPH`;
        this.clouds.textContent   =   `Clouds: ${weather.clouds} %`;
    }

}
// Init get ip adress

const  ip =  new IP;

// Load the dom content

document.addEventListener('DOMContentLoaded', loadFunction);

function loadFunction() {

    ip.getIpAdress()
        .then(data => {
            // init store

            const store =   new Store;

            // Get store data

            const locationData  =   store.getLocationData();

            // App weather Init

            const weather  =   new Weather(data.ip, locationData.city);

            // UI init

            const ui       =   new UI;

            // Get from form city

            document.querySelector('.box-field__form').addEventListener('submit', e => {

                const  city =   document.querySelector('.box-field__form')['input-field'].value;

                // Change location

                weather.changeLocation(city);

                // Set location

                store.setLocationData(city);

                getWeather();

                document.getElementById('input-field').value  =   '';

                e.preventDefault();
            })



            // Get weather data from the api

            weather.getWeather()
                .then( data => {
                        
                    ui.print(data);

                })
                .catch(err => console.log(err));
        })

}
//# sourceMappingURL=main.js.map
