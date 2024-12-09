import * as actionTypes from "../actions/actionTypes";

const initialState = {
  review: {},
  isLoading: false,
};

const ReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.REVIEWS_DATA:
      return {
        ...state,
        review: action.payload,
      };
    default:
      return state;
  }
};

export default ReviewsReducer;
