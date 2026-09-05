import { useAstronauts } from "../hooks/useAstronauts";

export default function LiveAstronauts() {
    const { data, isLoading, error } = useAstronauts();

    return (
        <section id="live-data" className="live-data">
            <h2>Live: Astronauts Currently in Space</h2>
            <p className="section-intro">
                Pulled in real time from the Open Notify public API — the same kind of
                live data pull the schedule table above will use once real API
                integration gets covered in Week 5.
            </p>

            <div className="astro-container">
                {/* Three distinct, explicit states — never guessing which one
                    to show based on missing/partial data. */}
                {isLoading && <p className="astro-status">Loading live data…</p>}

                {!isLoading && error && (
                    <p className="astro-status is-error">
                        Couldn't load live data right now. ({error})
                    </p>
                )}

                {!isLoading && !error && data && (
                    <>
                        <p className="astro-count">{data.number}</p>
                        <ul className="astro-list">
                            {data.people.map((person) => (
                                <li key={person.name}>{person.name}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
}
