import React, {useState} from 'react'

function FilterCharacter({filterCharacter}) {

    const [letter, setLetter] = useState('')

    const onChange = (value) => {
        setLetter(value);
    }


    return (
        <div className="filter">
            <form className="form" onSubmit={(e) => { e.preventDefault(); filterCharacter(letter)}} >
                <input type="text" placeholder="Filter Character" onChange={(e) =>{onChange(e.target.value)}}/>
                <button type="submit" className="btn">Search</button>
            </form>

        </div>
    )
}

export default FilterCharacter
