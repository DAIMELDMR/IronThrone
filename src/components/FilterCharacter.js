import React, {useState} from 'react'

const FilterCharacter = ({getName}) => {

    const [letter, setLetter] = useState('')

    const onChange = (value) => {
        setLetter(value);
        console.log(letter)
        getName(letter);
    }


    return (
        <div className="filter">
            <form className="form" onSubmit={(e) => onChange(e.target.value)}>
                <input type="text" placeholder="Filter Character" />
                <button type="submit" className="btn">Search</button>
            </form>

        </div>
    )
}

export default FilterCharacter
