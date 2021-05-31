const SET_LISTING_PAGE = "SET-LISTING-PAGE";

let initialState = {
  str: "Denis",
  page: null,
};

const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTING_PAGE: {
      return { ...state, page: action.page };
    }
    default:
      return state;
  }
};

export const setListingPage = (page) => ({ type: SET_LISTING_PAGE, page });

export default listingReducer;
