import React from 'react';
import { TEAM_LOGOS } from '../constants/teamData';

const TeamLogo = ({ teamName, className = "team-logo", alt }) => {
  const logo = TEAM_LOGOS[teamName];
  
  if (!logo) {
    return <span className="team-name-fallback">{teamName}</span>;
  }
  
  return (
    <img 
      src={logo} 
      alt={alt || teamName} 
      className={className} 
    />
  );
};

export default TeamLogo;