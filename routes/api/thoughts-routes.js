const router = require('express').Router();
const {
    getAllThoughts,
    addThoughts
} = require('../../controllers/thoughts-controller')

// GET all thoughts and POST to create thoughts

router
.route('/')
.get(getAllThoughts)

// create thoughts associated with user
router.route('/:userId').post(addThoughts);



module.exports = router;