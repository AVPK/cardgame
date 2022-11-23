import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";



function ListView(props) {
    const [listItemSelect,setlistItemSelect]=useState()
    const selectItem = (details) =>{
      setlistItemSelect(details._id)

        props.setSelectedData(details)
            }

  return (
    <div className="list">
      <h2 className="sectionHeading">Overview</h2>

      <Grid container spacing={2}>
        {props.sortedData &&
          props.sortedData.map((detail) => (
            <Grid item xs={4} key={detail._id}>
              <div className={listItemSelect===detail._id?"listItem selected":"listItem"} onClick={()=>selectItem(detail)}>
                <p className="text">{detail.RealName} <br/> {detail.PlayerName} <br/> {detail.Asset}</p>
                
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default ListView;
