const reqProm = require('request-promise');

const swApiUrl = 'https://swapi.co/api';

class Swapi {
    constructor(value) {
        this.value = value;
    }

    getPeopleByName = () => {

        var options = {
            uri: `${swApiUrl}/people/?name=${this.value}`,
            json: true
        };
        return new reqProm(options);
    }

    getFilmsByUri = () => {

        let filmId = this.value.replace('https://swapi.co/api/films/', '');

        var options = {
            uri: `${swApiUrl}/films/${filmId}`,
            json: true
        };
        return new reqProm(options);
    }
}

module.exports = Swapi;