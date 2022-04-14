const { Thoughts, User } = require('../models');

const thoughtsController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get thought by id
    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.thoughtsId })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts found with this id' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(500).json(err));
    },
    // add thoughts to user model
    addThoughts({ params, body }, res) {
        Thoughts.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // add reactions
    addReactions({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtsId },
            { $push: { thoughts: body } },
            { new: true }
        )
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.json(err));
    },


    // update thoughts by id
    updateThoughts({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtsId },
            { $set: { thoughts: body } },
            { new: true }
        )
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.json(err));
    },

    // remove thoughts {
    removeThoughts({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.thoughtsId })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts found with this id' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(500).json(err));
    },

    deleteReactions({ params }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtsId},
            { $pull: { reactions: { reactionsId: params.reactionsId } } },
            {new: true }
        )
        .then(dbThoughtsData  => res.json(dbThoughtsData))
        .catch(err => res.json(err));
    }
};

module.exports = thoughtsController;