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
        this.location.textContent   =   weather.city_name;
        this.desc.textContent       =   weather.weather.description;
        this.string.textContent     =   weather.temp;
        this.icon.setAttribute('src', 'https://www.weatherbit.io/static/img/icons/' + weather.weather.icon + '.png');
        this.humidity.textContent   =   `Relative humidity: ${weather.rh}`;
        this.feelsLike.textContent   =   `Feels like: ${weather.app_temp}`;
        this.dewpoint.textContent   =   `Dew point : ${weather.dewpt}`;
        this.wind.textContent   =   `Wind: ${weather.wind_cdir_full}`;
        this.clouds.textContent   =   `Clouds: ${weather.clouds}`;
    }

}