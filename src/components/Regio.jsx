import React from 'react'

function Regio({regions}) {

console.log(regions);
    return (

<>
{regions.map((regio, i) => {
    <div key={i}>
<div>{regio.name.official}</div>

    </div>
})}

</>
    
  )
}

export default Regio