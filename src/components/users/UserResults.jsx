import { useContext } from "react"
import { GithubContext } from "../../context/github/GithubContext"
// components
import Spinner from "../layouts/Spinner"
import UserItem from "./UserItem"

export default function UserResults() {
  const { users, loading, error } = useContext(GithubContext)


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
