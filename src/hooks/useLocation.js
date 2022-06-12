import axios from 'axios'
import { useState, useEffect } from 'react'

function useLocation(inputValue) {
    const [location, setLocation] = useState()
    const [locations, setLocations] = useState()

  useEffect(() => {
      let locationNumber
      if(inputValue){
          locationNumber = inputValue
      }else{
        locationNumber = Math.ceil(Math.random() * 126) 
        console.log(locations)
      }
    
    const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
    const LocationsUrl = 'https://rickandmortyapi.com/api/location'
    axios.get(LocationsUrl)
      .then(res => setLocations(res.data))
      .catch(err => console.log(err))
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [inputValue])
  return location
}

export default useLocation