import React from 'react'

function Regio({filterRegions}) {

console.log(filterRegions);
    return (

<>
{filterRegions.map((regio, i) => {
    <div key={i}>
<div>{regio.name.official}</div>

    </div>
})}

</>
    
  )
}

export default Regio