import { useEffect, useState } from "react"

export default function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.github.com/users')
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

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users && users.map((user) => (
        <h3>{user.login}</h3>
      ))}
    </div>
  )
}
