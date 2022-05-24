import React, { useState } from "react"
import './styles/App.css'
import "@fontsource/raleway"
import "@fontsource/roboto"
import UserSearchBar from "./UserSearchBar"
import UserTileList from "./UserTileList"
import UserCard from "./UserCard"

function App() {
  const PLACEHOLDER = { items: [], login: '!'}
  const [userQueryObj, setUserQueryObj] = useState(PLACEHOLDER)
  const [userObj, setUserObj] = useState(PLACEHOLDER)
  const [emptyQuery, setEmptyQuery] = useState(true)

  const newQueryHandler = (e) => {
    if (e.target.value !== '') {
      fetch(`https://api.github.com/search/users?q=${e.target.value}`)
        .then(res => { return res.json() })
        .then(res => {
          setUserQueryObj(res)
          setEmptyQuery(false)
        })
        .catch(error => console.error(`An error occured: ${error}`))
    } else {
      setEmptyQuery(true)
      setUserQueryObj(PLACEHOLDER)
    }
  } 

  const newUserObj = (usr) => {
    setUserObj(usr)
  }

  return (
    <div className="App">
      <div className="Navigation">
        <UserSearchBar onChange={newQueryHandler} />
        <UserTileList
          updateUser={newUserObj}
          queryObj={userQueryObj}
          mtQ={emptyQuery}
        />
      </div>

      <div className="Logo">
        Github user & repo list
      </div>

      <div className="Signature">
        done by <a href="https://github.com/mihawb">mihawb</a> | michalbanaszczak@gmail.com
      </div>

      <UserCard user={userObj}/>

    </div>
  )
}

export default App