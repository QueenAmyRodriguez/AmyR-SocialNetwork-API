const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// sets up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// sets up GET one, PUT, and Delete at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;