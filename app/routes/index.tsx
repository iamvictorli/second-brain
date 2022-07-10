import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold leading-9">Victor Li</h1>
      </header>
      <div className="h-8" aria-hidden />
      <nav className="border-b border-black pb-1">
        <ul className="flex list-none gap-4">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube Channels</Link>
          </li>
          <li>
            <Link to="/tech-talks">Tech Talks</Link>
          </li>
          <li>
            <Link to="/laughs">Laughs</Link>
          </li>
        </ul>
      </nav>

      <div className="h-8" aria-hidden />

      <article>
        <h2 className="text-3xl font-bold leading-9">Latest Notes</h2>
        <div className="h-6" aria-hidden />
        <ul className="pl-10">
          <li>WIP</li>
        </ul>

        <div className="h-6" aria-hidden />

        <p>
          <Link to="/notes">Full list of notes</Link>
        </p>
      </article>

      <div className="h-8" aria-hidden />

      <article>
        <h2 className="text-3xl font-bold leading-9">Latest Bookmarks</h2>
        <div className="h-6" aria-hidden />
        <ul className="pl-10">
          <li>
            <a
              href="https://www.smashingmagazine.com/2022/07/designing-better-pricing-page"
              target="_blank"
              rel="noreferrer"
            >
              Designing A Better Pricing Page
            </a>
          </li>
          <li>
            <a
              href="https://www.smashingmagazine.com/category/design-patterns"
              target="_blank"
              rel="noreferrer"
            >
              UX Design Patterns
            </a>
          </li>
          <li>
            <a
              href="https://github.com/awesome-selfhosted/awesome-selfhosted"
              target="_blank"
              rel="noreferrer"
            >
              Awesome Self Hosted
            </a>
          </li>
          <li>
            <a
              href="http://motherfuckingwebsite.com"
              target="_blank"
              rel="noreferrer"
            >
              This is a motherfucking website
            </a>
          </li>
          <li>
            <a
              href="http://bettermotherfuckingwebsite.com"
              target="_blank"
              rel="noreferrer"
            >
              Better motherfucking website
            </a>
          </li>
          <li>
            <a
              href="https://bestmotherfucking.website"
              target="_blank"
              rel="noreferrer"
            >
              Best motherfucking website
            </a>
          </li>
          <li>
            <a href="https://www.levels.fyi" target="_blank" rel="noreferrer">
              Compare career levels across companies
            </a>
          </li>
          <li>
            <a
              href="https://www.keyvalues.com"
              target="_blank"
              rel="noreferrer"
            >
              Find engineering teams that share your values
            </a>
          </li>
          <li>
            <a href="https://defensivecss.dev" target="_blank" rel="noreferrer">
              Defensive CSS. Practical CSS and design tips that helps in
              building future-proof user interfaces
            </a>
          </li>
          <li>
            <a href="https://daisyui.com" target="_blank" rel="noreferrer">
              daisyUI — Tailwind CSS Components
            </a>
          </li>
        </ul>

        <div className="h-6" aria-hidden />

        <p>
          <Link to="/bookmarks">Full list of bookmarks</Link>
        </p>
      </article>
    </>
  )
}
