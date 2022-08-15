import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const githubUrl = 'https://api.github.com/users'

export const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await fetch(githubUrl)
      const data = await res.json()
      dispatch({ type: 'GET_USERS', payload: data })
    }
    catch (err) {
      dispatch({ type: 'ERROR', payload: err.message })
    }
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        error: state.error,
        fetchUsers
      }}>
      {children}
    </GithubContext.Provider>
  )
}