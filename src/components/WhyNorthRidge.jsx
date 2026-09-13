const REASONS = [
  {
    num: '01',
    title: 'You talk to the practitioner',
    body: 'No handoff to a junior team after the sale. The person who scopes the work is the person who does it.',
  },
  {
    num: '02',
    title: 'Integrative by design',
    body: 'Technology, process, and training move together — so the capability survives the end of the project.',
  },
  {
    num: '03',
    title: 'Built on what you already own',
    body: 'We start from your current licensing and configuration before recommending anything new. Most organizations are paying for more than they use.',
  },
  {
    num: '04',
    title: 'Documented, not dependent',
    body: "Every engagement leaves runbooks behind. Success means your team doesn't need to call us.",
  },
]

export default function WhyNorthRidge() {
  return (
    <section className="section section-dark">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow on-dark">Why NorthRidge</p>
          <h2>What operational excellence actually requires</h2>
          <p className="lede on-dark">Four commitments that shape how every engagement runs.</p>
        </div>
        <div className="why">
          {REASONS.map((r) => (
            <div className="why-item" key={r.num}>
              <div className="why-num">{r.num}</div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
