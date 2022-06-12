import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useCharacterApi from '../hooks/useCharacterApi'


function CardCharacter({resident}) {
    
    const character = useCharacterApi(resident)
    console.log(character)
    
  return (
    <article>
        <img className='characterImage' src={character?.image} alt={character?.name} />
        <h2>{character?.name}</h2>
        <p>Status: {character?.status}</p>
        <p>Origin: {character?.origin.name}</p>
        <p>Episodes where appear: {character?.episode.length}</p>
    </article>
  )
}

export default CardCharacter