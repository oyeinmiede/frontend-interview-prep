import { useState, useMemo } from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';
import { flashcards } from '../data/flashcards';
import { useFlashcards } from '../hooks/useFlashcards';
import './Flashcards.css';

const CATEGORIES = [
  { id: 'all', label: 'All Topics' },
  { id: 'core', label: 'Core Web & JS' },
  { id: 'react', label: 'React' },
  { id: 'perf', label: 'Performance & Architecture' },
  { id: 'security', label: 'Security & A11y' },
  { id: 'workflow', label: 'Day-to-Day' }
];

const RATINGS = [
  { id: 'hard', label: 'Hard', color: 'hard' },
  { id: 'medium', label: 'Medium', color: 'medium' },
  { id: 'easy', label: 'Easy', color: 'easy' }
];

export default function Flashcards() {
  const { getDueCards, rateCard, stats } = useFlashcards();
  const [category, setCategory] = useState('all');
  const [includeAll, setIncludeAll] = useState(false);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(() => {
    const source = includeAll ? flashcards.filter(c => category === 'all' || c.category === category) : getDueCards(category);
    return source;
  }, [category, includeAll, getDueCards]);

  const card = deck[index];

  function handleCategoryChange(id) {
    setCategory(id);
    setIndex(0);
    setFlipped(false);
  }

  function handleFlip() {
    setFlipped(f => !f);
  }

  function handleRate(rating) {
    if (!card) return;
    rateCard(card.id, rating);
    setFlipped(false);
    setIndex(i => (i + 1 < deck.length ? i + 1 : 0));
  }

  function handleShuffle() {
    setIndex(Math.floor(Math.random() * deck.length));
    setFlipped(false);
  }

  return (
    <div className="flashcards-page">
      <div className="flashcards-header">
        <div>
          <h1>Flashcards</h1>
          <p className="flashcards-subtitle">{stats.dueToday} due &middot; {stats.mastered}/{stats.totalCards} mastered</p>
        </div>
        <button className="btn-toggle-mode" onClick={() => { setIncludeAll(a => !a); setIndex(0); setFlipped(false); }}>
          {includeAll ? 'Showing all cards' : 'Showing due cards'}
        </button>
      </div>

      <div className="category-filter">
        {CATEGORIES.map(c => (
          <button key={c.id} className={`category-chip ${category === c.id ? 'active' : ''}`} onClick={() => handleCategoryChange(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      {deck.length === 0 ? (
        <div className="empty-deck">
          <p>No cards due right now. Nice work.</p>
          <button className="btn-toggle-mode" onClick={() => setIncludeAll(true)}>Browse all cards anyway</button>
        </div>
      ) : (
        <>
          <div className="card-progress">Card {index + 1} of {deck.length}</div>

          <div className={`flip-card ${flipped ? 'flipped' : ''}`} data-category={card.category} onClick={handleFlip}>
            <div className="flip-card-inner">
              <div className="flip-card-face flip-card-front">
                <span className="card-topic">{card.topic}</span>
                <p className="card-text">{card.question}</p>
                <span className="flip-hint">Tap to reveal answer</span>
              </div>
              <div className="flip-card-face flip-card-back">
                <span className="card-topic">{card.topic}</span>
                <p className="card-text">{card.answer}</p>
              </div>
            </div>
          </div>

          <div className="card-controls">
            <button className="btn-icon" onClick={handleShuffle} title="Shuffle">
              <Shuffle size={18} />
            </button>
            {flipped ? (
              <div className="rating-buttons">
                {RATINGS.map(r => (
                  <button key={r.id} className={`rating-btn rating-${r.color}`} onClick={() => handleRate(r.id)}>
                    {r.label}
                  </button>
                ))}
              </div>
            ) : (
              <button className="btn-icon" onClick={() => setFlipped(false)} title="Reset flip">
                <RotateCcw size={18} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}