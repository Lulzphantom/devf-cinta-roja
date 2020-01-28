const reqProm = require('request-promise');
const util = require('util');
const configmodule = require('../config/config');

const nasaApiUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=%s&end_date=%s&api_key=%s';

class Nasa {
    constructor(startDate, endDate) {
        this.startDate = startDate,
        this.endDate = endDate
    }

    getNeo = () => {

        var options = {
            uri: util.format(nasaApiUrl, this.startDate, this.endDate, configmodule.nasaApiKey),
            json: true
        };

        return new reqProm(options);
    }
}

module.exports = Nasa;
