const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boutiqueSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    ownerName: {
        type: String
    },
    ownerSurname: {
        type: String
    },
    employeeNumber: {
        type: Number
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    continents: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


boutiqueSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Boutique = mongoose.model('Boutique', boutiqueSchema);

module.exports = { Boutique }