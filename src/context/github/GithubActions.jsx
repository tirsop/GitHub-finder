import axios from 'axios'

const githubUrl = 'https://api.github.com'
const github = axios.create({
  baseURL: githubUrl
})

// get all users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text })
  try {
    // const res = await fetch(`${githubUrl}/search/users?${params}`)
    // const { items } = await res.json()   // destructure only items from all the data
    // return items
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
  }
  catch (err) {
    return err.message
  }
}

// get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ])
  return { user: user.data, repos: repos.data }
}
