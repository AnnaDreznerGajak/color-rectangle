import React from 'react'

export const AddColor = ({colorName, setColor}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
        <input type="text" value={colorName} onChange={(e) => setColor(e.target.value)}/>
    </form>
  )
}
