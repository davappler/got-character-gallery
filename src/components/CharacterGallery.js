import React from 'react'
import characterData from '../characterData.json'
import Character from '../components/Character'

const CharacterGallery = () => {
    const characterList = characterData.map(character => <Character {...character} key={character.id} />)
    return (
        <div
            className='gallery-container' data-test='char-gallery'>
            {characterList}
        </div>
    );
};

export default CharacterGallery;