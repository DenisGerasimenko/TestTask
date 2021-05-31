import React from "react";
import "../../../styles/listingPage";
import Preloader from "../../Preloader/Preloader";

const ListingPage = (props) => {
  if (!props.page) {
    return <Preloader />;
  }
  return (
    <div class="listingPageBlock">
      <img src={props.page.data[8].image} width="130" height="200" />
      <a>{props.page.data[0].images[0].title}</a>
      <p class="indent">{props.page.data[0].images[0].description}</p>
      <img src={props.page.data[9].image} width="130" height="200" />
      <a>{props.page.data[0].images[0].title}</a>
      <p>{props.page.data[0].images[0].description}</p>
    </div>
  );
};

export default ListingPage;
