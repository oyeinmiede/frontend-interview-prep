import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'prepdeck_bookmarks';

export function useBookmarks() {
    const [bookmarkedIds, setBookmarkedIds] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? new Set(JSON.parse(raw)) : new Set();
        } catch {
            return new Set();
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...bookmarkedIds]));
    }, [bookmarkedIds]);

    const isBookmarked = useCallback(id => bookmarkedIds.has(id), [bookmarkedIds]);

    const toggleBookmark = useCallback(id => {
        setBookmarkedIds(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }, []);

    const removeBookmark = useCallback(id => {
        setBookmarkedIds(prev => {
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    }, []);

    return { bookmarkedIds, isBookmarked, toggleBookmark, removeBookmark };
}