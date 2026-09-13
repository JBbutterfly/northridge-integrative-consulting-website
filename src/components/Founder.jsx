import mark from '../assets/images/mark.webp'

export default function Founder() {
  return (
    <section className="section section-sunken" id="founder">
      <div className="wrap founder">
        <div className="portrait">
          <div className="frame">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.5-4.5L3 21"/></svg>
            <span>Founder portrait</span>
          </div>
          <img className="badge" src={mark} alt="" />
        </div>
        <div>
          <p className="eyebrow">Founder</p>
          <h2>One consultant, accountable end to end</h2>
          <div className="body">
            <p>NorthRidge Integrative Consulting is led by Jeff Beall, a Microsoft ecosystem specialist working across Microsoft 365, Copilot, the Power Platform, and AI enablement.</p>
            <p>The name is the method. Technology, process, and people are usually treated as three separate projects with three separate owners — which is exactly why so many rollouts stall at the announcement. NorthRidge takes all three as one engagement.</p>
            <p>And you talk to the person doing the work. The consultant who scopes your project is the consultant who delivers it, from the first call through the final handoff.</p>
          </div>
          <blockquote className="pull">A tool nobody was trained on is a line item, not a capability.</blockquote>
          <div className="sig">
            <span className="name">Jeff Beall</span>
            <span className="role">Owner &amp; Head Consultant</span>
            <span className="meta">Westville, Indiana</span>
          </div>
        </div>
      </div>
    </section>
  )
}
