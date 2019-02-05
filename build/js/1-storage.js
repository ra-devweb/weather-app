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