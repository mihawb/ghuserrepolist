import UserTile from "./UserTile"

function UserTileList(props) {
  if (props.queryObj.items.length === 0) {
    if (props.mtQ) {
      return
    } else {
      return (
        <>
          <div className="HorizDiv"></div>
          <div className="EmptyQueryNote">{'Nothing to show here :( Try something else'}</div>
        </>
      )
    }
  }

  return (
    <>
      <div className="HorizDiv"></div>
      <div className="UserTileList">
        { props.queryObj.items.length > 0
        ? props.queryObj.items.slice(0, 4).map((user) => (
            <UserTile updateUser={props.updateUser} key={user.id} user={user} />
          ))
        : <div className="LoadingInfo">Loading...</div>
        }
      </div>
    </>
  )
}

export default UserTileList