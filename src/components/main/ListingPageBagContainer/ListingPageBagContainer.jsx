import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setListingPage } from "../../../reducers/listing-reducer";
import ListingPageBag from "./ListingPageBag";


class ListingPageBagContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://fakerapi.it/api/v1/products?_quantity=10`)
      .then((response) => {
        this.props.setListingPage(response.data);
      });
  }

  render() {
    return (
      <div>
        <ListingPageBag {...this.props} page={this.props.page} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  page: state.listingPage.page,
});

export default connect(mapStateToProps, { setListingPage })(ListingPageBagContainer);
