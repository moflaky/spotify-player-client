import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="d-flex m-3 align-items-center "
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img
        className="rounded"
        src={track.albumUrl}
        style={{ height: "64px", width: "64px", margin: "10px" }}
      />
      <div className="ml-3">
        <div className="text-white ">{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}
