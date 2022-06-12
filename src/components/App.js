import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

function App() {
  return (
    <>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
        </div>
      </div>

      <SongDetail />
    </>
  );
}

export default App;
