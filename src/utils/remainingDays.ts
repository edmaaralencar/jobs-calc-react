const remainingDays = (job: any) => {
  const remainingDays = (job.total_hours / job.daily_hours).toFixed()
  const createDate = new Date(job.createdAt)
  const dueDay = createDate.getDate() + Number(remainingDays)
  const dueDateInMs = createDate.setDate(dueDay)

  const timeDiffInMs = dueDateInMs - Date.now()

  const dayInMs = 86400000
  const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

  return dayDiff
}

export default remainingDays
