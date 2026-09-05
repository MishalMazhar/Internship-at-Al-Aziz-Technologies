// The simplest possible reusable component: it just wraps whatever
// text is passed in (via `children`) in the site's existing button
// styling. Reusable because nothing about it is hard-coded — the
// label and the variant (primary/secondary) both come from props.

export default function Button({ children, variant = "primary", href = "#" }) {
    return (
        <a href={href} className={`btn btn-${variant}`}>
            {children}
        </a>
    );
}
