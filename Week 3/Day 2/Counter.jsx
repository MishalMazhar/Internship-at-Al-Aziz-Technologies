import { useState } from "react";

// Pure practice, not part of the real app — just proving useState
// and event handling work before using them for anything real.
// The "count" is the state; clicking a button is the event; the
// number on screen updates because React re-renders whenever
// setCount runs.

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="stat-card">
            <span className="stat-number">{count}</span>
            <span className="stat-label">Practice Counter</span>
            <div className="hero-actions" style={{ marginTop: "12px" }}>
                <button type="button" className="btn btn-secondary" onClick={() => setCount(count - 1)}>
                    −
                </button>
                <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
        </div>
    );
}
