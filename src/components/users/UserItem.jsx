import { Link } from "react-router-dom"

export default function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <img className="w-14 h-14 rounded-full drop-shadow-md" src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>
            Visit Profiile
          </Link>
        </div>
      </div>
    </div>
  )
}
