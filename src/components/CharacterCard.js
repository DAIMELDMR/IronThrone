import React from 'react'

const CharacterCard = ({char}) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src= {char.imageUrl} alt=""/>
                </div>
                <div class="flip-card-back">
                    <h1>{char.firstName}</h1>
                    <ul>
                        <li>
                            <strong>Full Name: {char.fullName}</strong>
                        </li>
                        <li>
                            <strong>House: {char.family}</strong>
                        </li>
                        <li>
                            <strong>Title: {char.title}</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
