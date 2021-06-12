import _ from "lodash";

const INITIAL_STATE = {};

const streamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload }; // Key interpolation syntax
    // it will create a new state and add key/value pair {id: data}
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload); // will create a new state

    default:
      return state;
  }
};

export default streamReducer;
