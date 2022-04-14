const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    }
    // thoughts: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Thoughts"
    //     }
    // ],
    // friends: [
    //     {
    //         types: Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ]
});

// create User model using UserSchema
const User = model('User', UserSchema);


module.exports = User;