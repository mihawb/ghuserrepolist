import { useState, useEffect } from 'react'
import RepoTile from './RepoTile'
import './styles/UserRepos.css'

function UserRepos({ reposUrl }) {
  const [reposObj, setReposObj] = useState([])

  useEffect(() => {
    const fetchReposObj = async () => {
      const res = await fetch(`${reposUrl}?sort=pushed&per_page=25`)
      const obj = await res.json()
      setReposObj(obj)
    }
    fetchReposObj()
  }, [reposUrl])

  return (
    <div className="UserRepos">
      <div className="SectionTitle">User's repositories</div>
      <div className="ReposList">{ reposObj.length > 0
      ? reposObj.map((repo) => (<RepoTile key={repo.id} repo={repo} />))
      : <div className="LoadingInfo">Loading...</div>
      }</div>
    </div>
  )
}

export default UserRepos