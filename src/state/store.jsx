import React, { createContext, useReducer } from 'react';

const initialState = {
  videoList: [],
  darkMode: false,
  currentVideo: {},
  currentVideoProfile: {},
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case 'search':
        return {
          videoList: action.payload,
          darkMode: currentState.darkMode,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
        };
      case 'darkMode':
        return {
          videoList: currentState.videoList,
          darkMode: action.payload,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
        };
      case 'play':
        return {
          videoList: currentState.videoList,
          darkMode: currentState.darkMode,
          currentVideo: action.video,
          currentVideoProfile: action.profile,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
