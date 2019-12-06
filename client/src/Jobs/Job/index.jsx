import React from 'react'

const Job = ({ job }) => {
  return (
    <div className='job'>
      <figure>
        <img src={job.company_logo} alt='' />
      </figure>
      <div className='job-text'>
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>

        <h5>{job.type}</h5>
      </div>
    </div>
  )
}

export default Job
