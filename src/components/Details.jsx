import React from 'react'

function Details(props) {
 
    return (
    <div className="details">
    <h2 className='sectionHeading'>Details</h2>
    {props.data &&
<div className='detailsBox'>
    <div className='detailstext'>
    <h3>Real Name: &nbsp; </h3>
    <p>{props.data.RealName}</p>
    </div>
    <div className='detailstext'>
    <h3>Player Name:  &nbsp;</h3>
    <p>{props.data.PlayerName} </p>
    </div>
    <div className='detailstext'>
    <h3>Asset:  &nbsp;</h3>
    <p> {props.data.Asset}</p>
    </div>
</div>}
    </div>
  )
}

export default Details