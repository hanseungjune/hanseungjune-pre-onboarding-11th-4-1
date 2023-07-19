const SET_TYPING = "search/set_typing";
const SET_ACTIVE_SEARCH_INDEX = "search/set_active_search_index";

interface TypingAction {
  type: string;
  payload: string;
}

interface ActiveSearchIndexAction {
  type: string;
  payload: number;
}

type SearchActionTypes = TypingAction | ActiveSearchIndexAction;

export function setTyping(typing: string): TypingAction {
  return { type: SET_TYPING, payload: typing };
}

export function setActiveSearchIndex(index: number): ActiveSearchIndexAction {
  return { type: SET_ACTIVE_SEARCH_INDEX, payload: index };
}

const INITIAL_STATE = {
  typing: "",
  activeSearchIndex: -1,
};

export function searchReducer(
  state = INITIAL_STATE,
  action: SearchActionTypes
) {
  switch (action.type) {
    case SET_TYPING:
      return { ...state, typing: action.payload };
    case SET_ACTIVE_SEARCH_INDEX:
      return { ...state, activeSearchIndex: action.payload };
    default:
      return state;
  }
}
