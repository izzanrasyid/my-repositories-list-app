import '../App.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RepoDetail from '../components/RepoDetail'

export default function Home () {
  const repositories = useSelector(state => state.reposReducer.repositories)
  const [owner, setOwner] = useState(repositories[0].owner.login)

  useEffect(() => {
    console.log('Did mounted')
  }, [])

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