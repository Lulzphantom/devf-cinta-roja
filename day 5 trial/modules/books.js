const reqProm = require('request-promise');

const booksApiUrl= 'http://openlibrary.org/search.json?';

module.exports = class books {
    constructor(value){
        this.value = value
    }

    GetBookInfo = () => {
        
        var options = {
            uri: `${booksApiUrl}q=${this.value}`,
            json: true
        };
        return new reqProm(options);
    }

    GetAuthorBooks = () => {
        rq = new reqProm(`${booksApiUrl}author=${this.value}`)
            .then((result) => {
                
            }).catch((err) => {
                
            });
    }

}