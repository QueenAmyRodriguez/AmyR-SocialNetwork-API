const router = require('express').Router();
const {
    getAllThoughts,
    addThoughts,
    getThoughtById,
    updateThoughts,
    removeThoughts,
    addReactions,
    deleteReactions
} = require('../../controllers/thoughts-controller')

// GET all thoughts and POST to create thoughts

router
.route('/')
.get(getAllThoughts)


// create thoughts associated with user
router.route('/:userId')
.post(addThoughts);

// update one thought or delete one thought routes
router.route('/:thoughtsId')
.get(getThoughtById)
.put(updateThoughts)
.delete(removeThoughts);


// add or delete reactions
router.route('/:thoughtsId/reactions')
.post(addReactions)
.delete(deleteReactions);


module.exports = router;