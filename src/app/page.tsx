"use client";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CoverLetterPage } from './components/CoverLetterPage';
import { ResumePage } from './components/ResumePage';
import { WelcomePage } from './welcomePage';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // TODO should I add a loading spinner here?
  }

  return (
    <Router>
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-2/5">
        <nav className="w-full bg-blue-950 text-amber-400 p-4 fixed top-0 left-0 right-0">
          <ul className='flex gap-4'>
            <li><Link to="/">Welcome Page</Link></li>
            <li><Link to="/cover-letter">Cover Letter</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/cover-letter" element={<CoverLetterPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
    </Router>
  );
}
