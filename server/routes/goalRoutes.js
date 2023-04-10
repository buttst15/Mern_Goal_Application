const express = require('express')
const router = express.Router()
const { getGoals, deleteGoal, updateGoal, setGoal} = require('../controllers/goalController')
const {get} = require("mongoose");
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect,setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router