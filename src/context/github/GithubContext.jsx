import { createContext, useState } from "react"

const githubUrl = 'https://api.github.com/users'

export const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch(githubUrl)
      const data = await res.json()
      setUsers(data)
    }
    catch (err) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <GithubContext.Provider value={{ users, loading, error, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  )
}