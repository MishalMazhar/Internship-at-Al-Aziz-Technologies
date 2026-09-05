const steps = [
    {
        number: "01",
        icon: "/images/probe.svg",
        title: "Discover",
        text: "Browse featured missions across rockets, rovers, satellites, and deep-space probes.",
    },
    {
        number: "02",
        icon: "/images/rocket.svg",
        title: "Track",
        text: "Check the launch schedule for vehicle, agency, and current mission status at a glance.",
    },
    {
        number: "03",
        icon: "/images/satellite.svg",
        title: "Get Notified",
        text: "Join the log with your preferred contact method and never miss a liftoff.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works">
            <h2>How Orbit Log Works</h2>
            <p className="section-intro">
                Three steps between "I heard there's a launch soon" and actually watching it happen.
            </p>

            <div className="steps-grid">
                {steps.map((step) => (
                    <div className="step-card" key={step.number}>
                        <span className="step-number">{step.number}</span>
                        <img src={step.icon} alt="" className="step-icon" />
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
