import React from 'react'
import Job from './Job';
export default function JobsList({jobs}) {
    return (
        <div className='container'>
            {jobs.map((job) => <Job key={job.id} job={job}/>)}
        </div>
    )
}
