import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Next-Problem</p>
        <p>Contact us:</p>
        <ul>
          <li>Email: <a href="mailto:info@next-problem.com">info@next-problem.com</a></li>
        </ul>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
