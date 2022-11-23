import React from "react";
import { Grid } from "@mui/material";



function ListView(props) {
    const listItemSelect='false'
    const selectItem = (details) =>{
        props.setSelectedData(details)
        console.log("Selected : " + details.RealName)
            }

  return (
    <div className="list">
      <h2 className="sectionHeading">Overview</h2>

      <Grid container spacing={2}>
        {props.sortedData &&
          props.sortedData.map((detail) => (
            <Grid item xs={4} key={detail._id}>
              <div className="listItem" onClick={()=>selectItem(detail)}>
                <p>{detail.RealName}</p>
                <p>{detail.PlayerName}</p>
                <p>{detail.Asset}</p>
              </div>
            </Grid>
          ))}
          
      </Grid>
    </div>
  );
}

export default ListView;
