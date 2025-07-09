import React, { useState } from 'react';
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
import cloud9Logo from '../Assets/team-logo/cloud9-logo.png';

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
                className={`ranking-item ${team.name.toLowerCase()}`}
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
                  {team.name === 'NAVI' && (
                    <img src={naviLogo} alt="NAVI" className="team-logo" />
                  )}
                  {team.name === 'Vitality' && (
                    <img src={vitalityLogo} alt="Vitality" className="team-logo" />
                  )}
                  {team.name === 'MOUZ' && (
                    <img src={mouzLogo} alt="MOUZ" className="team-logo" />
                  )}
                  {team.name === 'The Mongolz' && (
                    <img src={mongolzLogo} alt="The Mongolz" className="team-logo" />
                  )}
                  {team.name === 'Spirit' && (
                    <img src={spiritLogo} alt="Spirit" className="team-logo" />
                  )}
                  {team.name === 'Aurora' && (
                    <img src={auroraLogo} alt="Aurora" className="team-logo" />
                  )}
                  {team.name === 'Falcons' && (
                    <img src={falconsLogo} alt="Falcons" className="team-logo" />
                  )}
                  {team.name === 'FaZe' && (
                    <img src={fazeLogo} alt="FaZe" className="team-logo" />
                  )}
                  {team.name === 'FURIA' && (
                    <img src={furiaLogo} alt="FURIA" className="team-logo" />
                  )}
                  {team.name === 'G2' && (
                    <img src={g2Logo} alt="G2" className="team-logo" />
                  )}
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
                  {player.team === 'Vitality' && (
                    <img src={vitalityLogo} alt="Vitality" className="team-logo" />
                  )}
                  {player.team === 'Cloud9' && (
                    <img src={cloud9Logo} alt="Cloud9" className="team-logo" />
                  )}
                  {player.team === 'Spirit' && (
                    <img src={spiritLogo} alt="Spirit" className="team-logo" />
                  )}
                  {player.team === 'G2' && (
                    <img src={g2Logo} alt="G2" className="team-logo" />
                  )}
                  {player.team === 'NAVI' && (
                    <img src={naviLogo} alt="NAVI" className="team-logo" />
                  )}
                  {player.team === 'MOUZ' && (
                    <img src={mouzLogo} alt="MOUZ" className="team-logo" />
                  )}
                  {player.team === 'Astralis' && (
                    <span className="team-name-fallback">Astralis</span>
                  )}
                  {player.team === 'FaZe' && (
                    <img src={fazeLogo} alt="FaZe" className="team-logo" />
                  )}
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