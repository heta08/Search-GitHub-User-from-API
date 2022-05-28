import React from "react";
import SearchRepo from './SearchRepo';
 
const Favourites = (props)=>{
//    const {favourite} = props.location.state;
    return(
        <div>
            <h1>Favourites</h1>
            <div>

            </div>
            {console.log("New data 1", props.location)}
           

            {/* {console.log("New data3", props.location.state)}
            {console.log("New data in fav", props.handleFavourite)} */}
            {/* <p>{state.name}</p>
            {/* <p>{props.id}</p>
            <p>{props.name}</p> */}
        </div>
        
    )
}

export default Favourites;