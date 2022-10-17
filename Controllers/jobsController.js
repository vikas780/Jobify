const getAllJobs = async (req, res) => {
  res.send('GetAllJobs')
}

const showStats = async (req, res) => {
  res.send('Single Job')
}
const createJob = async (req, res) => {
  res.send('New Job created')
}
const updateJobs = async (req, res) => {
  res.send('Update existing job')
}
const deleteJob = async (req, res) => {
  res.send('Delete existing job')
}

module.exports = {
  getAllJobs,
  createJob,

  showStats,
  updateJobs,
  deleteJob,
}
