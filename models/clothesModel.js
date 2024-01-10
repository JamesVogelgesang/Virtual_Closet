const mongoose = require('mongoose')

const clothesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        clothesType: {
            type: String,
            enum: ['Hat', 'Jacket', 'Shirt', 'Pants', 'Shoe'],
            required: [true, "Please select what type of clothing it is"]
        },
        weatherType: {
            type: [String],
            enum: ['Snow', 'Rain', 'Cold', 'Hot', 'Moderate', 'Sunny'],
            required: [true, "Choose 1 or more types of weather to wear your specified clothes in!"]
        }
    }
)

const Clothes = mongoose.model('Clothes', clothesSchema)

module.exports = Clothes