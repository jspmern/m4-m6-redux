import { incNew } from "../action/actionType";

let intialValue = { inc: 1 };
function counterNewReducer(state = intialValue, action) {
  switch (action.type) {
    case incNew:
      return { ...state, inc: state.inc + 1 };

    default:
      return state;
  }
}

export default counterNewReducer;
