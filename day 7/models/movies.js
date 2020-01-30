const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviewSchema = new Schema({
    title : String,
    year: Number,
    description: String,
    image: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    theme: {
        type: String,
        enum: ['Comedia', 'Terro', 'Drama', 'Infantil']
    },
    director: {
        type: String,
        default: 'Desconocido'
    }
});
