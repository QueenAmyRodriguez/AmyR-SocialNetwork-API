const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
    username: {
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
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thoughts"
        }
    ],
    // friends: [
    //     {
    //         types: Schema.Types.ObjectId,
    //         ref: 'user'
    //     }
    // ]
});

// create User model using UserSchema
const User = model('User', UserSchema);


module.exports = User;