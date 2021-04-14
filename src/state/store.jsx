import React, { createContext, useReducer } from 'react';

const myStorage = window.sessionStorage;
const initialState = {
  videoList: [],
  darkMode: false,
  currentVideo: {},
  currentVideoProfile: {},
  loggedUser: myStorage.getItem('loggedUser')
    ? JSON.parse(myStorage.getItem('loggedUser'))
    : null,
  favorites: [],
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
          loggedUser: currentState.loggedUser,
          favorites: currentState.favorites,
        };
      case 'darkMode':
        return {
          videoList: currentState.videoList,
          darkMode: action.payload,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
          loggedUser: currentState.loggedUser,
          favorites: currentState.favorites,
        };
      case 'play':
        return {
          videoList: currentState.videoList,
          darkMode: currentState.darkMode,
          currentVideo: action.video,
          currentVideoProfile: action.profile,
          loggedUser: currentState.loggedUser,
          favorites: currentState.favorites,
        };
      case 'login':
        return {
          videoList: currentState.videoList,
          darkMode: currentState.darkMode,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
          loggedUser: action.payload,
          favorites: currentState.favorites,
        };
      case 'logout':
        return {
          videoList: currentState.videoList,
          darkMode: currentState.darkMode,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
          loggedUser: null,
          favorites: currentState.favorites,
        };
      case 'addFavorite':
        return {
          videoList: currentState.videoList,
          darkMode: currentState.darkMode,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
          loggedUser: currentState.loggedUser,
          favorites: currentState.favorites.append(action.payload),
        };
      case 'removeFavorite':
        return {
          videoList: currentState.videoList,
          darkMode: currentState.darkMode,
          currentVideo: currentState.currentVideo,
          currentVideoProfile: currentState.currentVideoProfile,
          loggedUser: currentState.loggedUser,
          favorites: currentState.favorites.filter(
            (video) => video.id.videoId !== action.payload.id.videoId
          ),
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
