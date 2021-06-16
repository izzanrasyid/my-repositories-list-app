import '../App.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchRepos, setRepos } from '../store/action'

export default function Home () {
  const [userInput, setUserInput] = useState({
    username: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(userInput, 'Did Mounted')
  }, [])

  function searchRepo (e) {
    e.preventDefault()
    if (userInput.username === '') {
      history.push("/")
    } else {
      dispatch(fetchRepos(userInput))
        .then(response => response.json())
        .then(repo => {
          dispatch(setRepos(repo))
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setUserInput({ ...userInput, username: '' })
          history.push("/repository")
        })
    }
  }
  
  return (
    <div>
      <p className="Text-home">Untuk mengetahui repository akun Github anda, silakan ketik username akun Github anda</p>
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
