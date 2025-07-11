import React, { useState } from 'react';
import AustinTournament from './AustinTournament';
import iemCardBg from '../Assets/tournament-logo/iem-card-bg.png';
import blastCardBg from '../Assets/tournament-logo/blast-card.bg.jpg';

const tournaments = [
  {
    id: 'austin-2025',
    name: 'BLAST.tv Austin Major 2025',
    date: 'January 2025',
    status: 'Completed',
    winner: 'Vitality',
    prizePool: '$1,250,000',
    location: 'Austin, Texas'
  },
  {
    id: 'iem-cologne-2025',
    name: 'IEM Cologne 2025 Stage 1',
    date: 'July 23-26, 2025',
    status: 'Upcoming',
    winner: 'TBD',
    prizePool: 'TBD',
    location: 'Cologne, Germany'
  },
  {
    id: 'iem-cologne-2025-main',
    name: 'IEM Cologne 2025',
    date: 'July 26 - Aug 3, 2025',
    status: 'Upcoming',
    winner: 'TBD',
    prizePool: '$1,250,000',
    location: 'Cologne, Germany'
  }
];

const TournamentCard = ({ tournament, onClick }) => {
  const isIEMCologne = tournament.id === 'iem-cologne-2025' || tournament.id === 'iem-cologne-2025-main';
  const isBlastAustin = tournament.id === 'austin-2025';
  
  if (isIEMCologne || isBlastAustin) {
    const backgroundImage = isBlastAustin ? blastCardBg : iemCardBg;
    return (
      <div>
        <div className="date-header">
          <span className={`date-button tournament-status ${tournament.status.toLowerCase()}`}>
            {tournament.status}
          </span>
        </div>
        <div className="tournament-card iem-card" onClick={() => onClick(tournament)}>
          <div className="tournament-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
          </div>
          <div className="tournament-info">
            <h3>{tournament.name}</h3>
            <div className="tournament-details">
              <p><strong>Date:</strong> {tournament.date}</p>
              <p><strong>Location:</strong> {tournament.location}</p>
              <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>
              {tournament.winner && <p><strong>Winner:</strong> {tournament.winner}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="date-header">
        <span className={`date-button tournament-status ${tournament.status.toLowerCase()}`}>
          {tournament.status}
        </span>
      </div>
      <div className="tournament-card" onClick={() => onClick(tournament)}>
        <h3>{tournament.name}</h3>
        <div className="tournament-details">
          <p><strong>Date:</strong> {tournament.date}</p>
          <p><strong>Location:</strong> {tournament.location}</p>
          <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>
          {tournament.winner && <p><strong>Winner:</strong> {tournament.winner}</p>}
        </div>
      </div>
    </div>
  );
}

const TournamentsPage = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);

  const handleTournamentClick = (tournament) => {
    if (tournament.id === 'austin-2025') {
      setSelectedTournament(tournament);
    }
  };

  const handleBackToTournaments = () => {
    setSelectedTournament(null);
  };

  if (selectedTournament) {
    return <AustinTournament onBack={handleBackToTournaments} />;
  }

  return (
    <div className="tournaments-page">
      <div className="tournaments-grid">
        {tournaments.map(tournament => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onClick={handleTournamentClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TournamentsPage;