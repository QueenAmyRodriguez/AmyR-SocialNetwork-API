const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    username: {
        type: String,
        required: true
    },
    // reactions: [ReactionSchema]
});

// create the Thoughts model using thoughtsSchema
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;