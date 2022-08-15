import { useEffect, useState } from "react"
// components
import Spinner from "../layouts/Spinner"
import UserItem from "./UserItem"

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
    <>
      {users &&
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      }

      {loading && <Spinner />}
      {error && <h1>{error}</h1>}
    </>
  )
}
