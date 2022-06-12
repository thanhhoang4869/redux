import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  return props.selectedSong !== null ? (
    <>
      <div>{props.selectedSong.title}</div>
      <div>{props.selectedSong.duration}</div>
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
