// Another basic reusable component — a generic card shell that any
// content can go inside. This is what MissionCard will build on
// tomorrow once props and real data get involved.

export default function Card({ title, children }) {
    return (
        <div className="step-card">
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}
