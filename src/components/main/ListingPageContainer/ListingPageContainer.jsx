import React from "react";
import { connect } from "react-redux";
import ListingPage from "./ListingPage";



class ListingPageContainer extends React.Component {

render() {
    return (
      <div>
        <ListingPage {...this.props} page={this.props.page}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  page: state.listingPage.page,
});

export default connect(mapStateToProps,{})(ListingPageContainer);