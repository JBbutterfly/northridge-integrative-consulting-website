import mark from '../assets/images/mark.webp'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="ft">
          <div>
            <img src={mark} alt="" />
            <p>Integrative consulting for organizations in Northwest Indiana and Chicagoland — Microsoft 365, AI enablement, process, and the people who have to use it all.</p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#founder">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+12193848458">219-384-8458</a></li>
              <li><a href="mailto:Jeff@northridgeintegrative.com">Jeff@northridgeintegrative.com</a></li>
              <li><span style={{ color: 'var(--forest-300)' }}>Westville, Indiana</span></li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">© 2026 NorthRidge Integrative Consulting</div>
      </div>
    </footer>
  )
}
