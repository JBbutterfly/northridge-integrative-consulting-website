import mark from '../assets/images/mark.webp'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="contours" viewBox="0 0 1440 620" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="#F0C080" strokeWidth="1.1">
          <path d="M-40 96 C 220 40, 470 150, 720 118 S 1200 26, 1490 92"/>
          <path d="M-40 154 C 220 98, 470 208, 720 176 S 1200 84, 1490 150"/>
          <path d="M-40 216 C 210 158, 480 274, 730 238 S 1205 142, 1490 210"/>
          <path d="M-40 282 C 200 222, 490 344, 740 304 S 1210 202, 1490 274"/>
          <path d="M-40 352 C 190 288, 500 416, 750 372 S 1215 264, 1490 342"/>
          <path d="M-40 426 C 180 358, 510 492, 760 444 S 1220 330, 1490 414"/>
          <path d="M-40 504 C 170 432, 520 572, 770 520 S 1225 400, 1490 490"/>
          <path d="M-40 586 C 160 510, 530 656, 780 600 S 1230 474, 1490 570"/>
        </g>
      </svg>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow on-dark">Integrative Consulting · Northwest Indiana &amp; Chicagoland</p>
            <h1>Operational excellence, built on the tools you already own</h1>
            <p className="lede on-dark">NorthRidge helps organizations get real, measurable work out of Microsoft 365 — from Copilot readiness through the processes and training that make it stick long after the rollout ends.</p>
            <div className="hero-cta">
              <a className="btn btn-ondark" href="#contact">Book a consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a className="btn btn-ghost-dark" href="#services">See what we do</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="plate"><img src={mark} alt="" /></div>
          </div>
        </div>
        <div className="focus-strip">
          <span>Microsoft 365</span>
          <span>AI Enablement</span>
          <span>Process Optimization</span>
          <span>Workforce Development</span>
          <span>Operational Excellence</span>
        </div>
      </div>
    </section>
  )
}
