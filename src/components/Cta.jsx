import mark from '../assets/images/mark.webp'

export default function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <div className="cta-inner">
          <img src={mark} alt="" />
          <h2>Let's find the one change worth making first</h2>
          <p className="lede">A short conversation is usually enough to tell where the leverage is in your environment — and whether we're the right fit to help.</p>
          <div className="cta-btns">
            <a className="btn btn-primary" href="mailto:Jeff@northridgeintegrative.com?subject=Consultation%20request">Book a consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="btn btn-secondary" href="tel:+12193848458">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
              Call 219-384-8458
            </a>
          </div>
          <div className="contact-row">
            <div className="item"><span className="k">Email</span><a className="v" href="mailto:Jeff@northridgeintegrative.com">Jeff@northridgeintegrative.com</a></div>
            <div className="item"><span className="k">Phone</span><a className="v" href="tel:+12193848458">219-384-8458</a></div>
            <div className="item"><span className="k">Service area</span><span className="v">Northwest Indiana · Chicagoland</span></div>
            <div className="item"><span className="k">Office</span><span className="v">By appointment</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
