import React from "react";
import { connect } from "react-redux"; //HOC: Higher Order Component
import { selectSong } from "../actions";

function SongList(props) {
  return props.songs.map((song, index) => {
    return (
      <div className="ui divided list" key={index}>
        <div className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      </div>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
