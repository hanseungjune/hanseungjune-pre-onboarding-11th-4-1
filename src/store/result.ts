const SHOWING = "result/showing";

interface ShowingAction {
  type: string;
  payload: string;
}

export function showingResult(showing: string): ShowingAction {
  return { type: SHOWING, payload: showing };
}

interface State {
  showing: string;
}

const INITIAL_STATE: State = {
  showing: "",
};

export function resultReducer(
  state = INITIAL_STATE,
  action: ShowingAction
): State {
  switch (action.type) {
    case SHOWING:
      return { ...state, showing: action.payload };
    default:
      return state;
  }
}
