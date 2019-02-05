// get ip adress

class IP {

    async getIpAdress () {

        const response   =   await fetch('https://api.ipify.org/?format=json');

        const respondeData  =   await response.json();

        return respondeData;

    }
}