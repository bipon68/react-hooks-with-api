import React from 'react'

// destructing props
const CharactersGrid = ({items, isLoading}) => {
    console.log('CharactersGrid props: ', isLoading)
    return isLoading ? (<h2>Loading...</h2>): (<section className='cards'>
            {
                items.map(item => (
                    <h3>{item.name}</h3>
                ))
            }
        </section>)
}

export default CharactersGrid
