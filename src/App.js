import logo from './Assets/TheCardGame-Logo.png';
import './App.css';
import {Grid} from "@mui/material"
import Details from "./components/Details"
import ListView from "./components/ListView"
import Sort from "./components/Sort"
import React ,  { useState } from 'react';
import CardData from "./data/CardData.json";
// import sortJson from 'sort-json'


// const check= {
//   "_id":"1",
//   "RealName":"Brianna Forbes",
//   "PlayerName":"Dreamlurk The Unstoppable",
//   "Asset":"Foghammer Lead"
// }

function App() {

  const [selectedData, setSelectedData] = useState();
  const [sortedData, setSortedData] = useState(CardData);

  const  sort= (type)=>{
    let json=[...sortedData];
    console.log(json)
    
    if(type==='asc'){
   json = json.sort((a, b) => {
   if(a.RealName < b.RealName)
{
  return -1;
}       
});
  setSortedData(json)
}
  else if(type==='desc')
  {
   json = json.sort((a, b)=>{
if(a.RealName > b.RealName)
{
  return -1;
}       
  });
  setSortedData(json)
}

  console.log(json)
    // setSortedData(json)
  }

  
  
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>The Card Game</h1>
      </header>

  <section className='MainSection'>
  <Grid container spacing={2}>
 
  <Grid item xs={8} xl={8}>
          <Details data={selectedData}/>
        </Grid>

        <Grid item xs={4} xl={4}>
        <Sort selectedData={selectedData} sort={sort} />
        </Grid>

    </Grid>
  </section>

  <section className="viewSection">
  <Grid container spacing={2}>
  <Grid item xs={8}>
        
          <ListView sortedData={sortedData} setSelectedData={setSelectedData}/>
          </Grid>
       
    </Grid>
  </section>
  


<footer className="footer">
<p><a href="mailto:awaisahmedshahid@gmail.com">Created by Awais</a></p>
</footer>
    </div>
  );
}

export default App;
