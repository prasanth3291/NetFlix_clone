import React from 'react';
import YouTube from 'react-youtube';
import './VideoPopup.css'; 

const VideoPopup = ({ videoId, closePopup }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="video-popup">
      <span className="close-button" onClick={closePopup}>
        &times;
      </span>
      <YouTube videoId={videoId} opts={opts} className="youtube-iframe" />
    </div>
  );
};

export default VideoPopup;