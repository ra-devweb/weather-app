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