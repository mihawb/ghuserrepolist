import './styles/UserCard.css'
import UserRepos from './UserRepos'

function UserCard({ user }) {
  if (user.login === '!')
    return

  return (
    <div className="UserCard">
      <div className="UserInfo">
        <img
          className="UCIavatar"
          alt={`${user.login}'s pfp`} 
          src={user.avatar_url}
        />
        <div className="UCIname">{user.name}</div>
        <div className="UCIlogin">{user.login}</div>
        <div className="UCIbio">{user.bio}</div>
        <div className="HorizDiv"></div>
      </div>
      <div className="VertDiv"></div>
      <UserRepos reposUrl={user.repos_url} />
    </div>
  )
}

export default UserCard