
const githubReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        users: [],
        loading: true,
        error: null
      }
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload, // in singular
        loading: false,
        error: null
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
        error: null
      }
    case 'ERROR':
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loading: false,
        error: null
      }
    default:
      return state
  }
}

export default githubReducer