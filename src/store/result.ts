import { setShowingType } from "components/SearchResultList";
const SET_SHOWING = "result/set_showing";

interface ShowingAction {
  type: string;
  payload: setShowingType[];
}

export function setShowing(showing: setShowingType[]) {
  return { type: SET_SHOWING, payload: showing };
}

const INITIAL_STATE = {
  showing: [],
};

export function resultReducer(state = INITIAL_STATE, action: ShowingAction) {
  switch (action.type) {
    case SET_SHOWING:
      return { ...state, showing: action.payload };
    default:
      return state;
  }
}
