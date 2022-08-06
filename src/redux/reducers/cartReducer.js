import { ActionTypes } from "../constants/action-types";

const initialState = {
  availableItemsInCart: [],
  quantity: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  // console.log(type);
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        availableItemsInCart: [...state.availableItemsInCart, payload],
      };
    default:
      return state;
  }
};
