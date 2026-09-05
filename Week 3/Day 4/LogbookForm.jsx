import { useState } from "react";
import { buildAlertMessage } from "../utils/missionHelpers";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LogbookForm() {
    // Every field is "controlled" — React state is the single source
    // of truth for what's in the input, not the DOM itself.
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("launches");
    const [notifyMethod, setNotifyMethod] = useState("email");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    function validate() {
        const nextErrors = {};

        if (fullName.trim() === "") {
            nextErrors.fullName = "Please enter your name.";
        }

        if (!emailPattern.test(email.trim())) {
            nextErrors.email = "Please enter a valid email address.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!validate()) {
            setSuccessMessage("");
            return;
        }

        const text =
            notifyMethod === "none"
                ? `Thanks, ${fullName} — you're on the list, no notifications.`
                : buildAlertMessage(fullName, notifyMethod);

        setSuccessMessage(text);

        // Reset the form back to its initial state.
        setFullName("");
        setEmail("");
        setInterest("launches");
        setNotifyMethod("email");
        setMessage("");
        setErrors({});
    }

    return (
        <section id="logbook" className="logbook">
            <h2>Join the Log</h2>
            <p>Get notified before launches and keep your own mission-watch history.</p>

            <form className="logbook-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your name"
                        className={errors.fullName ? "is-invalid" : ""}
                        aria-invalid={Boolean(errors.fullName)}
                    />
                    <p className="field-error">{errors.fullName}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={errors.email ? "is-invalid" : ""}
                        aria-invalid={Boolean(errors.email)}
                    />
                    <p className="field-error">{errors.email}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="interest">Primary Interest</label>
                    <select id="interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
                        <option value="launches">Launch Vehicles</option>
                        <option value="rovers">Rovers &amp; Landers</option>
                        <option value="satellites">Satellites</option>
                        <option value="probes">Deep Space Probes</option>
                    </select>
                </div>

                <fieldset className="form-group">
                    <legend>Notify me by</legend>
                    {["email", "sms", "none"].map((option) => (
                        <label className="radio-label" key={option}>
                            <input
                                type="radio"
                                name="notify"
                                value={option}
                                checked={notifyMethod === option}
                                onChange={(e) => setNotifyMethod(e.target.value)}
                            />
                            {option === "email" ? "Email" : option === "sms" ? "SMS" : "Don't notify me"}
                        </label>
                    ))}
                </fieldset>

                <div className="form-group">
                    <label htmlFor="message">Notes (optional)</label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Anything you want us to know?"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up for Mission Alerts</button>

                {successMessage && <p className="form-success">{successMessage}</p>}
            </form>
        </section>
    );
}
