import React from 'react'

function Details(props) {
 
    return (
    <div className="details">
    <h2 className='sectionHeading'>Details</h2>
    {props.data &&
<div>
    <h3>Real Name: {props.data.RealName} </h3>
    <p></p>
    <h3>Player Name: {props.data.PlayerName} </h3>
    <p></p>
    <h3>Asset: {props.data.Asset}</h3>
    <p></p>
</div>}
    </div>
  )
}

export default Details