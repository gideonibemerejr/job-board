import React from 'react'

const Job = ({ job }) => {
  return (
    <div className='job'>
      {job.title}: &nbsp;
      {job.company}
    </div>
  )
}

export default Job
