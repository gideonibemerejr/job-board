const fetch = require('node-fetch')

const BASE_URL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
  let resultCount = 1,
    onPage = 0

  const allJobs = []

  while (resultCount > 0) {
    const res = await fetch(`${BASE_URL}?page=${onPage}`)
    const jobs = await res.json()
    allJobs.push(...jobs)
    resultCount = jobs.length

    console.log('got', resultCount, 'jobs')
    onPage++
  }

  console.log('got', allJobs.length, 'total')
}

fetchGithub()
module.exports = fetchGithub