import React, {useState} from 'react'

const FilterCharacter = () => {

    const [letter, setLetter] = useState('')


    return (
        <div className="filter">
            <form>
                <input type="text" placeholder="Filter Character" value={letter}
                onChange={(e) => setLetter(e.target.value)}/>
            </form>

        </div>
    )
}

export default FilterCharacter
