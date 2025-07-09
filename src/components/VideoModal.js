import React, { useState, useEffect } from 'react';
import naviLogo from '../Assets/team-logo/navi-logo.png';
import vitalityLogo from '../Assets/team-logo/vitality-logo.png';
import mouzLogo from '../Assets/team-logo/mouz-logo.png';
import mongolzLogo from '../Assets/team-logo/mongolz-logo.png';
import spiritLogo from '../Assets/team-logo/spirit-logo.png';
import auroraLogo from '../Assets/team-logo/aurora-logo.png';
import falconsLogo from '../Assets/team-logo/falcons-logo.png';
import fazeLogo from '../Assets/team-logo/faze-logo.png';
import furiaLogo from '../Assets/team-logo/furia-logo.png';
import g2Logo from '../Assets/team-logo/g2-logo.png';
import painLogo from '../Assets/team-logo/pain-logo.png';

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

  const getTeamLogo = (teamName) => {
    const logos = {
      'NAVI': naviLogo,
      'Vitality': vitalityLogo,
      'MOUZ': mouzLogo,
      'The Mongolz': mongolzLogo,
      'Spirit': spiritLogo,
      'Aurora': auroraLogo,
      'Falcons': falconsLogo,
      'FaZe': fazeLogo,
      'FURIA': furiaLogo,
      'G2': g2Logo,
      'Pain': painLogo
    };
    return logos[teamName];
  };

  const getTeamColor = (teamName) => {
    const colors = {
      'NAVI': '#f5e933',
      'Vitality': '#231f20',
      'MOUZ': '#ff0000',
      'The Mongolz': '#f2b84b',
      'Spirit': '#000000',
      'Aurora': '#00ffff',
      'Falcons': '#01be6e',
      'FaZe': '#e43d30',
      'FURIA': '#22006a',
      'G2': '#333333',
      'Pain': '#ffffff'
    };
    return colors[teamName] || '#231f20';
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className={`modal-background-split ${isClosing ? 'closing' : ''}`}>
        {video.teams && video.teams.map((team, index) => (
          <div
            key={index}
            className={`team-half team-${index + 1} ${isClosing ? 'closing' : ''}`}
            style={{ backgroundColor: getTeamColor(team) }}
          >
            <img
              src={getTeamLogo(team)}
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
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&enablejsapi=1`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;