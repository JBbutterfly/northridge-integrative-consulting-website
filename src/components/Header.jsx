import mark from '../assets/images/mark.webp'
import wordmark from '../assets/images/wordmark.webp'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap hdr">
        <a className="lockup" href="#top" aria-label="NorthRidge Integrative Consulting home">
          <img className="mark" src={mark} alt="" />
          <img className="wordmark" src={wordmark} alt="NorthRidge Integrative Consulting" />
        </a>
        <nav className="nav" aria-label="Site">
          <a href="#top" aria-current="page">Home</a>
          <a href="#services">Services</a>
          <a href="#founder">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hdr-right">
          <a className="hdr-tel" href="tel:+12193848458">219-384-8458</a>
          <a className="btn btn-accent btn-sm" href="mailto:Jeff@northridgeintegrative.com?subject=Consultation%20request">Book a consultation</a>
        </div>
      </div>
    </header>
  )
}
