import React, { useReducer } from 'react';

export const STORY_ACTION = {};

const initialStoryState = {
  title: '테스트',
  memo: '',
};
const storyReducer = (state, action) => {
  switch (action.type) {
  }
};

export const StoryStateContext = React.createContext();
export const StoryDispatchContext = React.createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(storyReducer, initialStoryState);
  return (
    <StoryStateContext.Provider value={state}>
      <StoryDispatchContext.Provider value={dispatch}>
        {children}
      </StoryDispatchContext.Provider>
    </StoryStateContext.Provider>
  );
};
