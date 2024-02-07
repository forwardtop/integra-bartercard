import React from "react";

function VideoFanvilV62({videoUrl}) {
  return (
    <div>
      <div
        className=" mt-4 text-center"
      >
        <h1 className="p-5 text-3xl">Video Training</h1>
        <div className="lg:px-24 flex justify-center">
          <video controls width="80%" src={videoUrl} autoPlay />
        </div>
      </div>
      ;
    </div>
  );
}

export default VideoFanvilV62;
