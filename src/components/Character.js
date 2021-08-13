// Write your Character component here
import React from 'react'

const Character = props => {
    const { char } = props

    console.log(char)
    return (
        <div>
            {char.name}
        </div>
    )
}

export default Character