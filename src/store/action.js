export const SET_REPOS = 'repos/setRepos'

export function fetchRepos () {
  return function (dispatch) {
    return fetch('https://api.github.com/users/VERCEL/repos')
  }
}

export function setRepos (payload) {
  return { type: SET_REPOS, payload }
}