export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <span className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Live Mission Dashboard
                </span>
                <h1>Track every launch. Log every mission.</h1>
                <p>
                    Orbit Log brings every upcoming launch, active mission, and agency
                    into one dashboard — so you never miss a liftoff, and never lose
                    track of what you've watched leave the pad.
                </p>
                <div className="hero-actions">
                    <a href="#logbook" className="btn btn-primary">Get Notified</a>
                    <a href="#missions" className="btn btn-secondary">Browse Missions</a>
                </div>
            </div>

            <div className="orbit-visual" role="img" aria-label="Animated illustration of a satellite orbiting a planet">
                <div className="orbit-planet"></div>
                <div className="orbit-ring orbit-ring-inner"></div>
                <div className="orbit-ring orbit-ring-outer">
                    <span className="orbit-sat">
                        <img src="/images/satellite.svg" alt="" />
                    </span>
                </div>
            </div>
        </section>
    );
}
