
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from "./components/LocationInfo";
import ResidentCard from './components/ResidentCard';



function App() {
  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
  // Las ubicaciones van de la 1 a la 126
  let URL

  if(locationInput){
    URL = `https://rickandmortyapi.com/api/location/${locationInput}`
  } else {
    const randomIdLocation = Math.floor(Math.random() * 126) + 1
    URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
  }

  axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
}, [locationInput])

const handleSubmit = e => {
  e.preventDefault()
  setLocationInput(e.target.inputSearch.value)

}

  return (
    <div className="App">
      <h1 className='app__title'>Rick & Morty</h1>
      <form className='app__form' onSubmit={handleSubmit}>
        <input className='app__input' id="inputSearch" type="text" placeholder='Type a location id'/>
        <button className='app__btn'>Search</button>
      </form>
      {
        hasError ?
          <ErrorFetch />
        :
          <>
            <LocationInfo location={location} />
            <div className='residents-container'>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url} />
                ))
              }
            </div>
            
          </>           
        }
    </div>
  )
}         

export default App
