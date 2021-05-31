import React from "react";
import Sider from "./sider/Sider";
import "../../styles/main";
import ListingPageBagContainer from "./ListingPageBagContainer/ListingPageBagContainer";
import ListingPageContainer from "./ListingPageContainer/ListingPageContainer";
import {useState} from "react";


const Main = () => {

  const [isListingPageBagContainer,setIsListingPageBagContainer]= useState(true)

  return (
    <div className="mainBlock">
      <Sider />
      {
      isListingPageBagContainer ? <ListingPageBagContainer /> : <ListingPageContainer />
      }
      <p button className="mainBlockBtn">
        <button onClick={()=> setIsListingPageBagContainer(true)}>grid</button>
        <button onClick={()=> setIsListingPageBagContainer(false)}>list</button>
      </p>
    </div>
  );
};

export default Main;
