export const AddToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "DEPOSIT",
      payload: item,    
    });
  };
};
