import React from 'react'
import CharacterCard from './CharacterCard'

function Characters({characters}) {
    return (
        <div>
            <section className="cards">
                {characters.map(char => (
                    <CharacterCard key = {char.id} char = {char}></CharacterCard>
                ))}
            </section>
        </div>
    )
}

export default Characters
