import React, { useState, useEffect } from 'react';
import { VIDEO_COMPONENT_LOGOS, TEAM_COLORS } from '../constants/teamData';

const VideoModal = ({ video, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (video) {
      setIsClosing(false);
    }
  }, [video]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!video) return null;



  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className={`modal-background-split ${isClosing ? 'closing' : ''}`}>
        {video.teams && video.teams.map((team, index) => (
          <div
            key={index}
            className={`team-half team-${index + 1} ${isClosing ? 'closing' : ''}`}
            style={{ backgroundColor: TEAM_COLORS[team] || '#231f20' }}
          >
            <img
              src={VIDEO_COMPONENT_LOGOS[team]}
              alt={team}
              className="team-logo-background"
            />
          </div>
        ))}
        <div className={`center-divider ${isClosing ? 'closing' : ''}`}></div>
      </div>
      <div className="video-player" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={handleClose}>
          ×
        </button>
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&mute=0&controls=1&enablejsapi=1&rel=0&modestbranding=1`}
          title={video.title}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;