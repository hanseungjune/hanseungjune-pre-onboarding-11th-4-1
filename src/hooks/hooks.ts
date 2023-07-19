import { useSelector } from "react-redux";
import {
  typingAndActiveSearchIndexType,
  showingType,
} from "interface/interface";

export const useTyping = () => {
  return useSelector(
    (state: typingAndActiveSearchIndexType) => state.searchReducer.typing
  );
};

export const useActiveSearchIndex = () => {
  return useSelector(
    (state: typingAndActiveSearchIndexType) =>
      state.searchReducer.activeSearchIndex
  );
};

export const useShowing = () => {
  return useSelector((state: showingType) => state.resultReducer.showing);
};
