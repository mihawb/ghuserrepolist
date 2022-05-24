import { useState, useEffect } from 'react'
import './styles/UserTile.css'

function UserTile(props) {
  const [userObj, setUserObj] = useState({})

  useEffect(() => {
    const fetchUserObj = async () => {
      const res = await fetch(props.user.url)
      const obj = await res.json()
      if (obj.message)
        throw obj.message
      setUserObj(obj)
    }
    fetchUserObj()
      .catch(err => console.error(`Something went wrong: ${err}`))
  }, [props.user.url])

  return (
    <div className="UserTile" onClick={() => props.updateUser(userObj)}>
      <img
        className="UTavatar"
        alt={`${userObj.login}'s pfp`}
        src={userObj.avatar_url} 
      />
      <div className="UTcredentials">
        <div className="UTname">{userObj.name}</div>
        <div className="UTlogin">{userObj.login}</div>
        <div className="UTbio">{userObj.bio}</div>
      </div>
    </div>
  )
}

export default UserTile