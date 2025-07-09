import React from 'react';
import naviLogo from '../Assets/team-logo/navi-logo.png';
import vitalityLogo from '../Assets/team-logo/vitality-logo.png';
import mouzLogo from '../Assets/team-logo/mouz-logo.png';
import mongolzLogo from '../Assets/team-logo/mongolz-logo.png';
import spiritLogo from '../Assets/team-logo/spirit-logo-dark.png';
import auroraLogo from '../Assets/team-logo/aurora-logo.png';
import falconsLogo from '../Assets/team-logo/falcons-logo.png';
import fazeLogo from '../Assets/team-logo/faze-logo.png';
import furiaLogo from '../Assets/team-logo/furia-logo.png';
import g2Logo from '../Assets/team-logo/g2-logo.png';
import painLogo from '../Assets/team-logo/pain-logo.png';

const teamLogos = {
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

const VideoCard = ({ video, onClick }) => {
  const team1Logo = teamLogos[video.teams[0]];
  const team2Logo = teamLogos[video.teams[1]];

  return (
    <div className="video-card" onClick={() => onClick(video)}>
      <div className="vs-container">
        <div className="team-side team-left">
          {team1Logo && <img src={team1Logo} alt={video.teams[0]} className="vs-team-logo" />}
          <span className="team-name-vs">{video.teams[0]}</span>
        </div>
        <div className="vs-divider">
          <span className="vs-text">VS</span>
        </div>
        <div className="team-side team-right">
          {team2Logo && <img src={team2Logo} alt={video.teams[1]} className="vs-team-logo" />}
          <span className="team-name-vs">{video.teams[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;