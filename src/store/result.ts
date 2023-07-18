const SET_SHOWING = "result/set_showing";

interface ShowingAction {
  type: string;
  payload: string[];
}

export function setShowing(showing: string[]): ShowingAction {
  return { type: SET_SHOWING, payload: showing };
}

const INITIAL_STATE = {
  showing: "",
};

export function resultReducer(state = INITIAL_STATE, action: ShowingAction) {
  switch (action.type) {
    case SET_SHOWING:
      return { ...state, showing: action.payload };
    default:
      return state;
  }
}
