const reqProm = require('request-promise');

const audioDbApiUrl = 'http://www.theaudiodb.com/api/v1/json/1/search.php?';

class AudioDb {
    constructor(value) {
        this.value = value;
    }

    getArtists = () => {

        var options = {
            uri: `${audioDbApiUrl}s=${this.value}`,
            json: true
        };
        return new reqProm(options);
    }
}

module.exports = AudioDb;