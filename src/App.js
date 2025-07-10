import React, { useState } from 'react';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import TournamentsPage from './components/TournamentsPage';
import WorldRankingPage from './components/WorldRankingPage';
import './styles/App.css';
import logoImage from './Assets/Main Logo/major-highlights-logo.png';
import darkLogoImage from './Assets/Main Logo/major-highlights-dark-logo.png';
import vitVsMonThumbnail from './Assets/VS/vit-vs-mon.png';
import painVsMonThumbnail from './Assets/VS/pain-vs-mon.png';
import vitVsMouzThumbnail from './Assets/VS/vit-vs-mouz.png';
import monVsFazeThumbnail from './Assets/VS/mon-vs-faze.png';
import vitVsNaviThumbnail from './Assets/VS/vit-vs-navi.png';
import spiritVsMouzThumbnail from './Assets/VS/spirit-vs-mouz.png';
import painVsFuriaThumbnail from './Assets/VS/pain-vs-furia.png';

const finalsVideos = [
  {
    id: 1,
    title: "Vitality VS The Mongolz",
    thumbnail: vitVsMonThumbnail,
    youtubeId: "2GeYxpuibiE",
    teams: ["Vitality", "The Mongolz"],
    duration: "2:34",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  }
];

const semiFinalsVideos = [
  {
    id: 2,
    title: "The Mongolz VS Pain",
    thumbnail: painVsMonThumbnail,
    youtubeId: "eyL5eSv8_6E",
    teams: ["The Mongolz", "Pain"],
    duration: "3:15",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  },
  {
    id: 3,
    title: "MOUZ VS Vitality",
    thumbnail: vitVsMouzThumbnail,
    youtubeId: "lCzF89U_hUw",
    teams: ["MOUZ", "Vitality"],
    duration: "3:15",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  }
];

const quarterFinalsVideos = [
  {
    id: 4,
    title: "The Mongolz VS FaZe",
    thumbnail: monVsFazeThumbnail,
    youtubeId: "3NQG3fgddnk",
    teams: ["The Mongolz", "FaZe"],
    duration: "4:22",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  },
  {
    id: 5,
    title: "NAVI VS G2",
    thumbnail: vitVsNaviThumbnail,
    youtubeId: "SkmPSdhClww",
    teams: ["NAVI", "G2"],
    duration: "4:22",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  }
];

const playoffsVideos = [
  {
    id: 6,
    title: "Spirit VS MOUZ",
    thumbnail: spiritVsMouzThumbnail,
    youtubeId: "FpKGsAGwC9E",
    teams: ["Spirit", "MOUZ"],
    duration: "5:10",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  },
  {
    id: 7,
    title: "FURIA VS Pain",
    thumbnail: painVsFuriaThumbnail,
    youtubeId: "hbs-sn7x0v0",
    teams: ["FURIA", "Pain"],
    duration: "5:10",
    tournament: "BLAST.tv Austin Major 2025",
    description: ""
  }
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    finals: true,
    semiFinals: true,
    quarterFinals: true,
    playoffs: true
  });

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setIsMenuOpen(false);
  };

  const toggleSection = (section) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : ''}`}>
      <header className="header">
        <nav className="nav">
          <div className="logo" onClick={() => window.location.reload()}>
            <img src={isDarkTheme ? darkLogoImage : logoImage} alt="Major Highlights" className="logo-image" />
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links mobile ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => handleNavigation('home')}>Home</a></li>
            <li><a href="#tournaments" onClick={() => handleNavigation('tournaments')}>Tournaments</a></li>
            <li><a href="#world-ranking" onClick={() => handleNavigation('world-ranking')}>Ranking</a></li>
            <li><a href="#theme" onClick={toggleTheme}>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</a></li>
          </ul>
        </nav>
        <hr className="footer-separator" />
      </header>

      <main className="main">
        {currentPage === 'home' && (
          <div className="date-sections">
            {[
              { key: 'finals', title: 'AUSTIN // FINALS', videos: finalsVideos },
              { key: 'semiFinals', title: 'AUSTIN // SEMI FINALS', videos: semiFinalsVideos },
              { key: 'quarterFinals', title: 'AUSTIN // QUARTER FINALS', videos: quarterFinalsVideos },
              { key: 'playoffs', title: 'AUSTIN // PLAYOFFS', videos: playoffsVideos }
            ].map(section => (
              <div key={section.key} className="date-section">
                <div className="date-header">
                  <span className="date-button" onClick={() => toggleSection(section.key)}>
                    {section.title}
                  </span>
                </div>
                {visibleSections[section.key] && (
                  <div className="video-grid">
                    {section.videos.map(video => (
                      <VideoCard
                        key={video.id}
                        video={video}
                        onClick={setSelectedVideo}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {currentPage === 'tournaments' && (
          <TournamentsPage />
        )}
        
        {currentPage === 'world-ranking' && (
          <WorldRankingPage />
        )}
        
        <hr className="footer-separator" />
        <div className="footer-contact">
          <p>@MHGG</p>
          <p>MAJOR.HIGHLIGHTS@GMAIL.COM</p>
        </div>
      </main>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}

export default App;