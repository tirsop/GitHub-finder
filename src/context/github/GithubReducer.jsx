
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
    case 'ERROR':
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default githubReducer