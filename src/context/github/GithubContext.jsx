import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const githubUrl = 'https://api.github.com'

export const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

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

  const clearUsers = () => { dispatch({ type: 'CLEAR_USERS' }) }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        error: state.error,
        searchUsers,
        clearUsers
      }}>
      {children}
    </GithubContext.Provider>
  )
}