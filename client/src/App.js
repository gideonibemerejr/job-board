import React from 'react'
import Jobs from './Jobs'
import './App.css'

const jobs = [
  { title: 'SDE1', company: 'Google' },
  { title: 'SDE1', company: 'Facebook' },
  { title: 'Junior SDE', company: 'Amazon' },
  { title: 'Junior SDE', company: 'Apple' }
]
function App() {
  return (
    <div className='App'>
      <Jobs jobs={jobs} />
    </div>
  )
}

export default App
