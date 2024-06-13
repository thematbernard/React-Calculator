import React from 'react'

const getStyleName = button => {
    
    const className = {
        '=': 'equals',
        'x': 'operations',
        '-': 'operations',
        '+': 'operations',
        '/': 'operations',

    }
    return className[button]
}

const button = ( {value}) => {

    const handleButtonClick = () => {
        console.log(value)
    }
  return (
    
      <button onClick={handleButtonClick} className= {`${getStyleName(value)} button`}> {value}</button>
    
  )
}

export default button
