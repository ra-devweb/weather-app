// App weather Init

const weather  =   new Weather('new york');

// UI init

const ui       =   new UI;

//weather.changeLocation('miami');

// Get dom on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then( data => {

            let output   = `

                <li>${ui.print(data)}</li>

            `;

            result =   output;

            console.log(data);
        })
        .catch(err => console.log(err));
}