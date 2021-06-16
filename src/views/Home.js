import '../App.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchRepos, setRepos } from '../store/action'

export default function Home () {
  const [userInput, setUserInput] = useState({
    username: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()

  function searchRepo (e) {
    e.preventDefault()
    console.log('masuuuukkkkk')
    if (userInput.username !== '') {
      console.log(userInput, '<<<<<<<')
      dispatch(fetchRepos(userInput))
        .then(response => response.json())
        .then(repo => {
          dispatch(setRepos(repo))
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          history.push("/repository")
        })
    } else {
      history.push("/")
    }
  }

  return (
    <div>
      <form onSubmit={searchRepo}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input onChange={e => setUserInput({ ...userInput, username: e.target.value })} type="text" className="form-control" placeholder="Username"/>
        </div>
      </form>
    </div>
  )
}
