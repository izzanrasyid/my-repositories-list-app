import '../App.css'
import { fetchRepos, setRepos } from '../store/action'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RepoDetail from '../components/RepoDetail'

export default function Home () {
  const dispatch = useDispatch()
  const repositories = useSelector(state => state.reposReducer.repositories)
  const [owner, setOwner] = useState('')

  useEffect(() => {
    dispatch(fetchRepos())
      .then(response => response.json())
      .then(repo => {
        dispatch(setRepos(repo))
        setOwner(repo[0].owner.login)
      })
      .catch(err => {
        console.log(err)
      })
  }, [dispatch])

  return (
    <>
      <div className="Main">
        <div className="Text-center">
          <h1 className="Title-Repository">{owner}'s Repositories</h1>
        </div>
        <div>
          {
            repositories.map(repo => {
              return <RepoDetail 
                key={repo.id}
                name={repo.name}
                owner={repo.owner.login}
                lang={repo.language}
              />
            })
          }
        </div>
      </div>
    </>
  )
}