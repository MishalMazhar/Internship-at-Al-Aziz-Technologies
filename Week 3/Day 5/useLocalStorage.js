import { useState, useEffect } from "react";

/**
 * Works just like useState, except the value is also saved to
 * Local Storage, and restored automatically the next time the
 * page loads. This is the custom hook the Day 4 curriculum asks
 * for — pulling repeated logic out into something reusable instead
 * of copy-pasting the same localStorage read/write in every component
 * that needs to remember something.
 */
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch (error) {
            console.error(`Couldn't read "${key}" from localStorage:`, error);
            return initialValue;
        }
    });

    // Runs as a side effect whenever `value` changes — this is the
    // useEffect dependency array in action from Day 3.
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Couldn't save "${key}" to localStorage:`, error);
        }
    }, [key, value]);

    return [value, setValue];
}
