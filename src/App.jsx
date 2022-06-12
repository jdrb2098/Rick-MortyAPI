import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardCharacter from './components/CardCharacter'
import useLocation from './hooks/useLocation'
import SearchInput from './components/SearchInput'

function App() {

  const [inputValue, setInputValue] = useState()
  const location = useLocation(inputValue)


  return (
    <div className="App">
      <SearchInput setInputValue={setInputValue} />
      <LocationInfo location={location} />
      <div className='characterList'>
        {location?.residents.map(resident =>(
          <CardCharacter resident={resident} key={resident} />
        ))}
      </div>
      
    </div>
  )
}

export default App
