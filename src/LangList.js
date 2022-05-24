import { useState } from 'react'
import './styles/LangList.css'

function LangList({ reponame }) {
  const [loaded, setLoaded] = useState(false)
  const [langs, setLangs] = useState({})

  const loadLangs = () => {
    fetch(`https://api.github.com/repos/${reponame}/languages`)
      .then(res => res.json())
      .then(obj => {
        if (obj.message)
          throw obj.message
        setLangs(obj)
      })
      .catch(err => console.error(`Something went wrong: ${err}`))
    setLoaded(true)
  }

  if (!loaded) {
    return (
      <button className="LangBtn" onClick={loadLangs}>Load languages</button>
    )
  }

  return (
    <ul>
      {Object.entries(langs).map((lang) => (
        <li key={lang[0]}>{lang[0]}: {lang[1]}</li>
      ))}
    </ul>
  )
}

export default LangList