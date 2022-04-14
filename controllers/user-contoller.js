const { User } = require('../models');

const userController = {
    // get all the users
    getAllUsers(req, res) {
        User.findAll({})
            .then(dbUserdata => res.json(dbUserdata))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one user by id
    getUserByID({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserdata => res.json(dbUserdata))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // create a user
    createUser({ body }, res) {
        Pizza.create(body)
            .then(dbUserdata => res.json(dbUserdata))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserdata => {
                if (!dbUserdata) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserdata);
            })
            .catch(err => res.status(500).json(err));
    },

    // delete a user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserdata => {
                if (!dbUserdata) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserdata);
            })
            .catch(err => res.status(500).json(err));
    }
};

module.exports = userController;