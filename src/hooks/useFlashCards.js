import { useState, useEffect, useCallback } from 'react';
import { flashcards } from '../data/flashcards';

const STORAGE_KEY = 'prepdeck_flashcard_progress';
const DAYS_BY_BOX = [0, 2, 4, 7, 14];

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d.toISOString();
}

export function useFlashcards() {
    const [progress, setProgress] = useState(loadProgress);

    useEffect(() => { saveProgress(progress); }, [progress]);

    const getCardState = useCallback((id) => progress[id] || { box: 0, dueDate: null, timesReviewed: 0, lastRating: null }, [progress]);

    const isDue = useCallback((id) => {
        const state = getCardState(id);
        if (!state.dueDate) return true;
        return new Date(state.dueDate) <= new Date();
    }, [getCardState]);

    const getDueCards = useCallback((category = 'all') => {
        return flashcards.filter(c => (category === 'all' || c.category === category) && isDue(c.id));
    }, [isDue]);

    const rateCard = useCallback((id, rating) => {
        setProgress(prev => {
            const current = prev[id] || { box: 0, dueDate: null, timesReviewed: 0, lastRating: null };
            let newBox = current.box;
            if (rating === 'hard') newBox = 0;
            else if (rating === 'medium') newBox = current.lastRating && current.lastRating !== 'hard' ? Math.min(current.box + 1, 4) : current.box;
            else if (rating === 'easy') newBox = Math.min(current.box + 1, 4);
            return {
                ...prev,
                [id]: { box: newBox, dueDate: addDays(new Date(), DAYS_BY_BOX[newBox]), timesReviewed: current.timesReviewed + 1, lastRating: rating }
            };
        });
    }, []);

    const stats = {
        totalCards: flashcards.length,
        mastered: Object.values(progress).filter(s => s.box === 4).length,
        questionsAnswered: Object.values(progress).reduce((sum, s) => sum + s.timesReviewed, 0),
        dueToday: getDueCards('all').length
    };

    return { getCardState, getDueCards, rateCard, stats };
}