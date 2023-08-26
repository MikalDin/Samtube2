import React from "react";
import { VideoCard } from "./VideoCard";

export default function VideoIndex({ videos }) {
  return (
    <div className="row">
      {videos.map((video) => (
        <div className="col-md-3 p-2" key={video.id.videoId}>
          <div className="card h-100 w-100">
            <VideoCard video={video} />
          </div>
        </div>
      ))}
    </div>
  );
}
