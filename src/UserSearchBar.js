import React, { useMemo } from "react"
import debounce from "lodash.debounce"
import './styles/UserSearchBar.css'

function UserSearchBar(props) {
  const debouncedChangeHandler = useMemo(() => {
    return debounce(props.onChange, 400)
  }, [props.onChange])

  return (
    <input
      className="UserSearchBar"
      onChange={debouncedChangeHandler}
      type="text"
      placeholder="Who are you looking for?"
    />
  )
}

export default UserSearchBar