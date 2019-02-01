// Get the geolocation

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else { 
    console.log('Geolocation is not supported by this browser.');
}

function showPosition(position) {

    let lat = position.coords.latitude,
        lon = position.coords.longitude;

    console.log(lat, lon)

}

// App weather Init

const weather  =   new Weather();

// UI init

const ui       =   new UI;

//weather.changeLocation('miami');

// Get dom on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

    function getWeather() {
        weather.getWeather()
            .then( data => {
                    
                ui.print(data);

                console.log(data);
            })
            .catch(err => console.log(err));
}