const SET_TYPING = "search/set_typing";

interface TypingAction {
  type: string;
  payload: string;
}

export function setTyping(typing: string): TypingAction {
  return { type: SET_TYPING, payload: typing };
}

const INITIAL_STATE = {
  typing: "",
};

export function searchReducer(state = INITIAL_STATE, action: TypingAction) {
  switch (action.type) {
    case SET_TYPING:
      return { ...state, typing: action.payload };
    default:
      return state;
  }
}
