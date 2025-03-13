import { CoverLetterPage } from './components/CoverLetterPage';
import { ResumePage } from './components/ResumePage';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-2/5">
      <nav className="w-full bg-blue-950 text-amber-400 p-4 fixed top-0 left-0 right-0">
        <ul className='flex gap-4'>
          <li>test 1</li>
          <li>test 2</li>
          <li>test 3</li>
        </ul>
      </nav>
      <main >
    
        <CoverLetterPage />
        <ResumePage />



      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
