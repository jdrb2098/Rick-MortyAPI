import React, { useState } from 'react'

function SearchInput({setInputValue}) {

    
    const searchLocation = (e) => {
        e.preventDefault()
        setInputValue(e.target.children[0].value)
    }
  return (
    <form action='' onSubmit={searchLocation}>
        <input type='text'></input>
        <button>Search</button>
    </form>
  )
}

export default SearchInput