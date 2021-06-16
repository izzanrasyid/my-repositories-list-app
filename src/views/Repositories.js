import '../App.css'
import { fetchRepos, setRepos } from '../store/action'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RepoDetail from '../components/RepoDetail'

export default function Home () {
  const dispatch = useDispatch()
  const repositories = useSelector(state => state.reposReducer.repositories)

  useEffect(() => {
    dispatch(fetchRepos())
      .then(response => response.json())
      .then(repo => {
        console.log(repo, 'repoooo')
        dispatch(setRepos(repo))
      })
      .catch(err => {
        console.log(err)
      })
  }, [dispatch])

  return (
    <>
      <div className="Main">
        <h1>Repo</h1>
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