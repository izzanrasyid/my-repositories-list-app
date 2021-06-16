export const SET_REPOS = 'repos/setRepos'

export function fetchRepos (payload) {
  return function (dispatch) {
    const username = payload.username.toUpperCase()
    return fetch(`https://api.github.com/users/${username}/repos`)
  }
}

export function setRepos (payload) {
  return { type: SET_REPOS, payload }
}