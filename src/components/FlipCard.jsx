export default function FlipCard({ card, flipped, onFlip, children }) {
    return (
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} data-category={card.category} onClick={onFlip}>
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
            {children}
        </div>
    );
}