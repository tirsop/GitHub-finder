import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

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


  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch
      }}>
      {children}
    </GithubContext.Provider>
  )
}