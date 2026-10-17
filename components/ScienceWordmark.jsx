export default function ScienceWordmark({ className = '' }) {
  return (
    <span className={`hero-title-glow ${className}`.trim()} aria-hidden="true">
      <span className="hero-title-copy">S</span>
      <span className="hero-title-copy">C</span>
      <span className="hero-title-copy">I</span>
      <span className="hero-title-e">
        <span className="hero-title-e-bar" />
        <span className="hero-title-e-bar" />
        <span className="hero-title-e-bar" />
      </span>
      <span className="hero-title-copy">N</span>
      <span className="hero-title-copy">C</span>
      <span className="hero-title-e">
        <span className="hero-title-e-bar" />
        <span className="hero-title-e-bar" />
        <span className="hero-title-e-bar" />
      </span>
    </span>
  )
}