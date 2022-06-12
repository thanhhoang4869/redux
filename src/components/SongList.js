import React from "react";
import { connect } from "react-redux";

function SongList() {
  return <div>SongList</div>;
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect()(SongList);
