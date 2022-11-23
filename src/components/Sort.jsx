import React from 'react'
import axios from 'axios'
const backEndURL='https://URL.com'
const headers={"Content-Type": "application/json",'Access-Control-Allow-Origin':"*", 'Access-Control-Allow-Methods':"GET, POST, PUT",'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token', 'Authorization':`Bearer {token}`}

function Sort(props) {

    const submit = () =>{
console.log(props.selectedData)

axios.post(backEndURL + '/submit', {
  _id:props.selectedData._id,
  RealName: props.selectedData.RealName,
  PlayerName: props.selectedData.PlayerName,
  Asset: props.selectedData.Asset
}, {
  headers: headers,
})
  .then((ret) => {
    if (ret[0].inserted) {
      console.log('data submitted')
    }
    else if (!ret[0].inserted) {
console.log('data not submitted')
    }
  })
  .catch((e) => {
    console.log(e)
  })
    }
   
  return (
    <div className="sort">
         <h2 className='sectionHeading'>Controls</h2>
         <div className='spanTwoButton'>
<button className="sortButton" onClick={()=>props.sort("asc")}>
SORT ASC
</button>
<button className="sortButton" onClick={()=>props.sort("desc")}>
SORT DESC
</button>
         </div>
         <div className='submitDiv'>
         <button className="submitButton" onClick={submit}>
SUBMIT
</button>
         </div>
         </div>
  )
}

export default Sort