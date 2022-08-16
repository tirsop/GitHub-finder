import { createContext, useCallback, useReducer } from "react"
import githubReducer from "./GithubReducer"

const githubUrl = 'https://api.github.com'

export const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)


  // get all users
  const searchUsers = async (text) => {
    dispatch({ type: 'LOADING' })
    const params = new URLSearchParams({ q: text })
    try {
      const res = await fetch(`${githubUrl}/search/users?${params}`)
      const { items } = await res.json()   // destructure only items from all the data
      dispatch({ type: 'GET_USERS', payload: items })
    }
    catch (err) {
      dispatch({ type: 'ERROR', payload: err.message })
    }
  }


  // get single user
  const getUser = useCallback(async (login) => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await fetch(`${githubUrl}/users/${login}`)
      if (res.status === 404) return window.location = '/notfound'
      const data = await res.json()
      dispatch({ type: 'GET_USER', payload: data })
    }
    catch (err) {
      dispatch({ type: 'ERROR', payload: err.message })
    }
  }, [])


  // get user repos
  const getRepos = async (login) => {
    dispatch({ type: 'LOADING' })
    const params = new URLSearchParams({ sort: 'created', per_page: 10 })
    try {
      const res = await fetch(`${githubUrl}/users/${login}/repos?${params}`)
      const data = await res.json()
      dispatch({ type: 'GET_REPOS', payload: data })
    }
    catch (err) {
      dispatch({ type: 'ERROR', payload: err.message })
    }
  }


  const clearUsers = () => { dispatch({ type: 'CLEAR_USERS' }) }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        error: state.error,
        searchUsers,
        getUser,
        getRepos,
        clearUsers
      }}>
      {children}
    </GithubContext.Provider>
  )
}