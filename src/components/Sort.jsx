import React from 'react'

function Sort(props) {

    const submit = () =>{
console.log("Selected Data : " + props.selectedData)
    }
   
  return (
    <div className="sort">
         <h2 className='sectionHeading'>Controls</h2>
         <div>
<button className="sortButton" onClick={()=>props.sort("asc")}>
SORT ASC
</button>
<button className="sortButton" onClick={()=>props.sort("desc")}>
SORT DESC
</button>
         </div>
         <div>
         <button className="submitButton" onClick={submit}>
SUBMIT
</button>
         </div>
         </div>
  )
}

export default Sort