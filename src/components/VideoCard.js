import React from 'react';
import { TEAM_LOGOS } from '../constants/teamData';

const VideoCard = ({ video, onClick }) => {
  const team1Logo = TEAM_LOGOS[video.teams[0]];
  const team2Logo = TEAM_LOGOS[video.teams[1]];

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