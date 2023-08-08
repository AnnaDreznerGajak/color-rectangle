import React from 'react'

export const Rectangle = ({ colorName }) => {

const recStyle = {
    background: colorName
}

    return (
        <div className="rectangle" style={recStyle}>
            <p>{colorName != '' ? colorName : 'Empty'}</p>
        </div>
    )
}
