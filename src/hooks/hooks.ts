import { typingType } from "components/SearchForm";
import { showingType } from "components/SearchResultList";
import { useSelector } from "react-redux";

export const useTyping = () => {
  return useSelector((state: typingType) => state.searchReducer.typing);
};

export const useShowing = () => {
  return useSelector((state: showingType) => state.resultReducer.showing);
};
