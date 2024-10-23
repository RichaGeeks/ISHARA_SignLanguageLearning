
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="icon-social-twitter"></i>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="icon-social-github"></i>
        </a>
        <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="icon-social-dribbble"></i>
        </a>
      </div>
      <p className="footer-text">© 2024 Ishara. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
