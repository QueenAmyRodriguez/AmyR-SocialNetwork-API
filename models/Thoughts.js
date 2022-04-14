const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

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
    reactions: [ReactionSchema]
});

// create the Thoughts model using thoughtsSchema
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;