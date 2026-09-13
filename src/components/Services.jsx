const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
)

const SERVICES = [
  {
    title: 'Microsoft 365',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
    body: 'Tenant configuration, migration, and governance — SharePoint, Teams, Exchange, and OneDrive set up the way your people actually work rather than the way the defaults assume.',
    features: ['Site architecture and permissions', 'Migration and tenant cleanup', 'Governance and lifecycle policy'],
  },
  {
    title: 'AI Enablement',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/></svg>,
    body: 'Copilot readiness and rollout: licensing, permissions hygiene, agent design, and the guardrails that make AI output something you can put in front of a client.',
    features: ['Copilot readiness assessment', 'Oversharing and permissions remediation', 'Custom agents and prompt libraries'],
  },
  {
    title: 'Process Optimization',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M15.5 5H10a4 4 0 0 0 0 8h4a4 4 0 0 1 0 8H8.5"/></svg>,
    body: "Map what actually happens today, remove the handoffs that don't earn their keep, and automate what's left with the Power Platform.",
    features: ['Process mapping and bottleneck analysis', 'Power Automate workflows', 'Forms, approvals, and reporting'],
  },
  {
    title: 'Workforce Development',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20"/><circle cx="9" cy="7" r="3.2"/><path d="M22 20v-1.5a4 4 0 0 0-3-3.87"/><path d="M16.5 4.2a3.2 3.2 0 0 1 0 6.1"/></svg>,
    body: "Role-based training that lands — short sessions built on your real documents, with reference material your team still reaches for once we're gone.",
    features: ['Role-based M365 and Copilot training', 'Live sessions and recorded reference', 'Written runbooks and quick guides'],
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Services</p>
          <h2>Four ways we work</h2>
          <p className="lede">Each engagement stands on its own. Most clients start with one and add the next once the first is holding.</p>
        </div>
        <div className="cards">
          {SERVICES.map((s) => (
            <article className="card" key={s.title}>
              <div className="chip">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="feat">
                {s.features.map((f) => (
                  <li key={f}>{CHECK}{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
