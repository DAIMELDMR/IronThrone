import React from 'react'

const CharacterCard = ({char}) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src= {char.imageUrl} alt=""/>
                </div>
                <div className="flip-card-back">
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
