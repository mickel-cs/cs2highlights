import React from 'react';
import TeamLogo from './TeamLogo';

const bracketData = {
  finals: {
    match: { team1: 'Vitality', team2: 'The Mongolz', winner: 'Vitality' }
  },
  semiFinals: [
    { team1: 'Vitality', team2: 'MOUZ', winner: 'Vitality' },
    { team1: 'The Mongolz', team2: 'Pain', winner: 'The Mongolz' }
  ],
  quarterFinals: [
    { team1: 'Vitality', team2: 'G2', winner: 'Vitality' },
    { team1: 'MOUZ', team2: 'Spirit', winner: 'MOUZ' },
    { team1: 'The Mongolz', team2: 'FaZe', winner: 'The Mongolz' },
    { team1: 'Pain', team2: 'FURIA', winner: 'Pain' }
  ]
};

const BracketMatch = ({ match, isWinner = false }) => (
  <div className="bracket-match">
    <div className={`bracket-team ${match.winner === match.team1 ? 'winner' : 'loser'}`}>
      <TeamLogo teamName={match.team1} className="bracket-logo" />
      <span>{match.team1}</span>
    </div>
    <div className={`bracket-team ${match.winner === match.team2 ? 'winner' : 'loser'}`}>
      <TeamLogo teamName={match.team2} className="bracket-logo" />
      <span>{match.team2}</span>
    </div>
  </div>
);

const AustinTournament = ({ onBack }) => {
  return (
    <div className="tournament-detail">
      <h1>BLAST.tv Austin Major 2025</h1>
      <div className="tournament-bracket">
        <div className="champion">
          <div className="champion-trophy">🏆</div>
          <div className="champion-team">
            <TeamLogo teamName={bracketData.finals.match.winner} className="champion-logo" />
            <span className="champion-name">{bracketData.finals.match.winner}</span>
          </div>
        </div>
        <div className="bracket-round">
          <h3>Finals</h3>
          <div className="bracket-matches">
            <BracketMatch match={bracketData.finals.match} isWinner={true} />
          </div>
        </div>
        
        <div className="bracket-round">
          <h3>Semi Finals</h3>
          <div className="bracket-matches">
            {bracketData.semiFinals.map((match, index) => (
              <BracketMatch key={index} match={match} />
            ))}
          </div>
        </div>
        
        <div className="bracket-round">
          <h3>Quarter Finals</h3>
          <div className="bracket-matches">
            {bracketData.quarterFinals.map((match, index) => (
              <BracketMatch key={index} match={match} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AustinTournament;