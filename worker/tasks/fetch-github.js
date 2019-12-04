const fetch = require('node-fetch')
const redis = require('redis'),
  client = redis.createClient()
const { promisify } = require('util')
// const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)

const BASE_URL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
  let resultCount = 1,
    onPage = 0

  const allJobs = []

  // fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${BASE_URL}?page=${onPage}`)
    const jobs = await res.json()
    allJobs.push(...jobs)
    resultCount = jobs.length

    console.log('got', resultCount, 'jobs')
    onPage++
  }

  // filter algorithm

  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase()

    // logic
    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('architect') ||
      jobTitle.includes('lead')
    ) {
      return false
    }
    return true
  })

  console.log('got', allJobs.length, 'total')
  console.log('filtered down to', jrJobs.length)

  // set in redis
  const success = await setAsync('github', JSON.stringify(allJobs))
  console.log({ success })
}

module.exports = fetchGithub
