const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  createJob,

  showStats,
  updateJobs,
  deleteJob,
} = require('../controllers/jobsController')

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJobs)

module.exports = router
