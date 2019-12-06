import React from 'react'
import { Typography } from '@material-ui/core'
import Job from './Job'

const Jobs = ({ jobs }) => {
  return (
    <>
      <Typography variant='h1'>Entry Level Software Jobs</Typography>
      <div className='jobs'>
        {jobs.map((job, idx) => (
          <Job key={idx} job={job} />
        ))}
      </div>
    </>
  )
}

export default Jobs
