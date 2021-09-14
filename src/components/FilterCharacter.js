import React, {useState} from 'react'

const FilterCharacter = () => {

    const [letter, setLetter] = useState('')


    return (
        <div>
            {window.addEventListener('keydown', event => {
                //https://keycode.info/  using only alphabethical keys
                if (event.keyCode > 64 && event.keyCode < 91) {
                    const l = event.key;
                    setLetter(l);
                } else if (event.keyCode === 27) {
                    window.removeEventListener('keydown', event)
                }
            })}
        </div>
    )
}

export default FilterCharacter
