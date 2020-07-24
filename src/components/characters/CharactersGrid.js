import React from 'react';
import CharacterItem from './CharacterItem';

// destructing props
const CharactersGrid = ({items, isLoading}) => {
    console.log('CharactersGrid props: ', isLoading)
    return isLoading ? (<h2>Loading...</h2>): (<section className='cards'>
            {
                items.map((item) => (
                    <CharacterItem key={item.char_id} item={item}></CharacterItem>
                ))
            }
        </section>)
}

export default CharactersGrid
