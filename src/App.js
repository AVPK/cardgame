import logo from './Assets/TheCardGame-Logo.png';
import './App.css';
import {Grid} from "@mui/material"
import Details from "./components/Details"
import ListView from "./components/ListView"
import Sort from "./components/Sort"
import React ,  { useState , useEffect} from 'react';
import CardData from "./data/CardData.json";
const backEndURL='https://URL.com'
const headers={"Content-Type": "application/json",'Access-Control-Allow-Origin':"*", 'Access-Control-Allow-Methods':"GET, POST, PUT",'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token', 'Authorization':`Bearer {token}`}


function App() {

  const [selectedData, setSelectedData] = useState();
  const [sortedData, setSortedData] = useState();

  const getData = () => {
    const abortConstant = new AbortController();

    fetch(backEndURL + "/getData", { signal: abortConstant.signal, headers: headers })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setSortedData(data)
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          console.log(err.message);
        }

      });
      setSortedData(CardData)
    return () => abortConstant.abort();
  }

  useEffect(() => {
    getData();
  }, []);

  const  sort= (type)=>{
    let json=[...sortedData];
    
    if(type==='asc'){
   json = json.sort((a, b) => {
   if(a.RealName < b.RealName)
{
  return -1;
}
else
return null;       
}
);
  setSortedData(json)
}
  else if(type==='desc')
  {
   json = json.sort((a, b)=>{
if(a.RealName > b.RealName)
{
  return -1;
} 
else
return null;       
  });
  setSortedData(json)
}

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
