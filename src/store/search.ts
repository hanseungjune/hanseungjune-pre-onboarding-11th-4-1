const TYPING = "search/typing";

interface TypingAction {
  type: string;
  payload: string;
}

export function typingSearch(typing: string): TypingAction {
  return { type: TYPING, payload: typing };
}

interface State {
  typing: string;
}

const INITIAL_STATE: State = {
  typing: "",
};

export function searchReducer(
  state = INITIAL_STATE,
  action: TypingAction
): State {
  switch (action.type) {
    case TYPING:
      return {...state, typing: action.payload}
    default:
      return state;
  }
}
