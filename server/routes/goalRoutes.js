const express = require('express')
const router = express.Router()
const { getGoals, deleteGoal, updateGoal, setGoal} = require('../controllers/goalController')
const {get} = require("mongoose");

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router