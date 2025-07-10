import React from 'react';
import { VIDEO_COMPONENT_LOGOS, TEAM_LOGOS } from '../constants/teamData';
import spiritLogo from '../Assets/team-logo/spirit-logo.png';

const VideoCard = ({ video, onClick, isDarkTheme }) => {
  const getTeamLogo = (teamName) => {
    if (teamName === 'Spirit' && isDarkTheme) {
      return spiritLogo;
    }
    return VIDEO_COMPONENT_LOGOS[teamName];
  };
  
  const team1Logo = getTeamLogo(video.teams[0]);
  const team2Logo = getTeamLogo(video.teams[1]);

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