import { useState, useEffect } from "react";

/**
 * Fetches the live astronaut count from the Open Notify API and
 * exposes loading / error / data as separate pieces of state, so
 * any component using this hook can show the right UI for each case
 * (a loading message, an error message, or the real data) instead
 * of guessing.
 */
export function useAstronauts() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // A flag to avoid updating state if the component unmounts
        // before the fetch finishes — a common real-world gotcha.
        let isCancelled = false;

        async function fetchAstronauts() {
            try {
                const response = await fetch("https://api.open-notify.org/astros.json");

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const json = await response.json();

                if (!isCancelled) {
                    setData(json);
                    setIsLoading(false);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err.message);
                    setIsLoading(false);
                }
            }
        }

        fetchAstronauts();

        return () => {
            isCancelled = true;
        };
    }, []); // empty dependency array — only run once, when the component first mounts

    return { data, isLoading, error };
}
