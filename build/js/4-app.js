// Load the dom content

document.addEventListener('DOMContentLoaded', loadFunction);

function loadFunction() {

    // Init the lambda

    const getIdAndSecretKeys    =  async () => {

        const response  =   await fetch('/.netlify/functions/var');

        const resIdSecret   =  await response.json();
        
        // Set the variable key

        const apiKey    =   resIdSecret.id;

        // Init get ip adress

        const  ip =  new IP;

        ip.getIpAdress()
            .then(data => {
                // init store

                const store =   new Store;

                // Get store data

                const locationData  =   store.getLocationData();

                // App weather Init

                const weather  =   new Weather(apiKey, data.ip, locationData.city);

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

    getIdAndSecretKeys();

}