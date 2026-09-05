import { useState } from "react";

/**
 * Day 2 version — just proving controlled inputs work. Every
 * keystroke updates React state, and the input's value comes from
 * that state, not from the DOM itself. Real validation and the
 * full field set come back once forms get revisited later.
 */
export default function LogbookForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section id="logbook" className="logbook">
            <h2>Join the Log</h2>
            <p>Get notified before launches and keep your own mission-watch history.</p>

            <form className="logbook-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up for Mission Alerts</button>

                {submitted && (
                    <p className="form-success">
                        Thanks, {fullName || "friend"} — you're on the list.
                    </p>
                )}
            </form>
        </section>
    );
}
