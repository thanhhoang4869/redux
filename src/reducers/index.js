import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scape", duration: "4:05" },
    { title: "The Box", duration: "3:14" },
    { title: "Swan", duration: "5:10" },
    { title: "Pretty Boy", duration: "4:14" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
