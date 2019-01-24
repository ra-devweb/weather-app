// Weather Api

class Weather {

    constructor() {

        this.apiKey     =   '7f8eaa6b284ee7c54b51277a130790c5';
        this.location   =   '37.8267,-122.4233';
    }

    async get() {

        const response =  await  fetch(`https://api.darksky.net/forecast/${this.apiKey}/${this.location}`);

        const responseData  =   await response.json();

        return responseData;

    }

}

const call  =   new Weather;

call.get()
    .then( data => {

        // let output   =   '';

        // data.forEach(title => {
        //     output  += `
        //         <li>${title}</li>
        //     `;
        // });

        // document.getElementById('result').innerHTML =   output;

        console.log(data);
    });