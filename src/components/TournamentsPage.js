import React, { useState } from 'react';
import AustinTournament from './AustinTournament';

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
    id: 'upcoming-1',
    name: 'Upcoming Tournament',
    date: 'TBD 2025',
    status: 'Upcoming',
    winner: null,
    prizePool: 'TBD',
    location: 'TBD'
  },
  {
    id: 'upcoming-2',
    name: 'Upcoming Tournament',
    date: 'TBD 2025',
    status: 'Upcoming',
    winner: null,
    prizePool: 'TBD',
    location: 'TBD'
  }
];

const TournamentCard = ({ tournament, onClick }) => (
  <div className="tournament-card" onClick={() => onClick(tournament)}>
    <div className="tournament-header">
      <h3>{tournament.name}</h3>
      <span className={`tournament-status ${tournament.status.toLowerCase()}`}>
        {tournament.status}
      </span>
    </div>
    <div className="tournament-details">
      <p><strong>Date:</strong> {tournament.date}</p>
      <p><strong>Location:</strong> {tournament.location}</p>
      <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>
      {tournament.winner && <p><strong>Winner:</strong> {tournament.winner}</p>}
    </div>
  </div>
);

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