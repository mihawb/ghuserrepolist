import './styles/RepoTile.css'
import LangList from './LangList'

function RepoTile({ repo }) {
  const showLangs = () => {

  }

  return (
    <>
    <div className="RepoTile" onClick={showLangs}>
      <div className="RTname">{repo.name}</div>
      <div className="RTdesc">{repo.description}</div>
      <LangList reponame={repo.full_name} />
    </div>
    
    </>
  )
}

export default RepoTile