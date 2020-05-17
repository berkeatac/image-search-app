const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_PARAMS":
      return {
        ...state,
        term: action.payload.term,
        collection: action.payload.collection,
        page: 1,
      };
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload.images,
        total_pages: action.payload.total_pages,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};

export default appReducer;
