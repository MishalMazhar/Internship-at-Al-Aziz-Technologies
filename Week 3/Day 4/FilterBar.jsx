const FILTERS = [
    { value: "all", label: "All" },
    { value: "go", label: "Go" },
    { value: "review", label: "Under Review" },
    { value: "hold", label: "Hold" },
];

export default function FilterBar({ activeFilter, onFilterChange }) {
    return (
        <div className="filter-bar" role="group" aria-label="Filter launches by status">
            {FILTERS.map((filter) => (
                <button
                    key={filter.value}
                    type="button"
                    className={`filter-btn ${activeFilter === filter.value ? "is-active" : ""}`}
                    aria-pressed={activeFilter === filter.value}
                    onClick={() => onFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}
