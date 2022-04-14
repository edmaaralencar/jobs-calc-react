import api from 'services/api'

const getJobs = async () => {
  const { data } = await api.get('/jobs')

  return data
}

const createJob = async (jobData: any) => {
  const { data } = await api.post('/jobs', jobData)

  return data
}

const deleteJob = async (jobId: string) => {
  await api.delete(`/jobs/${jobId}`)

  return jobId
}

const updateJob = async (jobInfo: any) => {
  const { data } = await api.patch(`/jobs/${jobInfo.jobId}`, jobInfo.jobData)

  return data
}

const jobService = {
  getJobs,
  createJob,
  deleteJob,
  updateJob
}

export default jobService
