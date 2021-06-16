import { SET_REPOS } from '../action'

const initialState = {
  repositories: []
}

function reposReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_REPOS:
      return { ...state, repositories: state.repositories.concat(payload) }
    default:
      return state
  }
}

export default reposReducer