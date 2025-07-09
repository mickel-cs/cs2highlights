import React, { useState } from 'react';
import TeamLogo from './TeamLogo';

const topTeams = [
  { rank: 1, name: "Vitality", points: 1000, players: ["ZywOo", "apEX", "Magisk", "flameZ", "Spinx"] },
  { rank: 2, name: "MOUZ", points: 950, players: ["frozen", "siuhy", "Brollan", "xertioN", "Jimpphat"] },
  { rank: 3, name: "The Mongolz", points: 900, players: ["bLitz", "Techno4K", "910", "sk0R", "mzinho"] },
  { rank: 4, name: "Spirit", points: 850, players: ["donk", "Zweih", "sh1ro", "zont1x", "chopper"] },
  { rank: 5, name: "Aurora", points: 800, players: ["deko", "clax", "gr1ks", "kensi", "Forester"] },
  { rank: 6, name: "NAVI", points: 750, players: ["Aleksib", "jL", "b1t", "w0nderful", "iM"] },
  { rank: 7, name: "Falcons", points: 700, players: ["snappi", "SunPayus", "dupreeh", "Maden", "MAGISK"] },
  { rank: 8, name: "FaZe", points: 650, players: ["karrigan", "rain", "frozen", "ropz", "broky"] },
  { rank: 9, name: "FURIA", points: 600, players: ["arT", "yuurih", "KSCERATO", "skullz", "chelo"] },
  { rank: 10, name: "G2", points: 550, players: ["HooXi", "m0NESY", "NiKo", "huNter-", "nexa"] }
];

const topPlayers = [
  { rank: 1, name: "ZywOo", team: "Vitality", rating: 1.35 },
  { rank: 2, name: "sh1ro", team: "Cloud9", rating: 1.28 },
  { rank: 3, name: "donk", team: "Spirit", rating: 1.25 },
  { rank: 4, name: "m0NESY", team: "G2", rating: 1.22 },
  { rank: 5, name: "electronic", team: "NAVI", rating: 1.20 },
  { rank: 6, name: "frozen", team: "MOUZ", rating: 1.18 },
  { rank: 7, name: "blamef", team: "Astralis", rating: 1.15 },
  { rank: 8, name: "NiKo", team: "G2", rating: 1.12 },
  { rank: 9, name: "Ax1Le", team: "Cloud9", rating: 1.10 },
  { rank: 10, name: "ropz", team: "FaZe", rating: 1.08 }
];

const WorldRankingPage = () => {
  const [activeTab, setActiveTab] = useState('teams');
  const [hoveredTeam, setHoveredTeam] = useState(null);

  return (
    <div className="world-ranking-page">
      <div className="ranking-tabs">
        <button 
          className={`tab-button ${activeTab === 'teams' ? 'active' : ''}`}
          onClick={() => setActiveTab('teams')}
        >
          TEAM RANKINGS
        </button>
        <button 
          className={`tab-button ${activeTab === 'players' ? 'active' : ''}`}
          onClick={() => setActiveTab('players')}
        >
          PLAYER RANKINGS
        </button>
      </div>
      <div className="ranking-container">
        {activeTab === 'teams' && (
          <div className="ranking-list">
            {topTeams.map(team => (
              <div 
                key={team.rank} 
                className={`ranking-item ${team.name.toLowerCase().replace(/\s+/g, '-')}`}
                onMouseEnter={() => setHoveredTeam(team.rank)}
                onMouseLeave={() => setHoveredTeam(null)}
              >
                <div className="logo-container">
                  <span className="points">{team.rank === 1 ? '1st' : team.rank === 2 ? '2nd' : team.rank === 3 ? '3rd' : `${team.rank}th`}</span>
                </div>
                <span className="team-name">
                  {hoveredTeam === team.rank ? team.players.join(', ') : team.name}
                </span>
                <div className="team-logo-container">
                  <TeamLogo teamName={team.name} />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'players' && (
          <div className="ranking-list">
            {topPlayers.map(player => (
              <div key={player.rank} className={`ranking-item player-item ${player.team.toLowerCase()}`}>
                <span className="rank-number">#{player.rank}</span>
                <span className="player-name">{player.name}</span>
                <div className="player-team-logo">
                  <TeamLogo teamName={player.team} />
                </div>
                <span className="player-rating">{player.rating}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldRankingPage;