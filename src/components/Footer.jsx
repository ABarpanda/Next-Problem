import React from 'react';
import packageJson from '../../package.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>2025 Next-Problem</p>
      <p>Version {packageJson.version}</p>
        {/* <p>Contact us:</p> */}
        <ul>
          <li>Email: <a href="mailto:info@next-problem.com">info@next-problem.com</a></li>
        </ul>
        <div className="social-links">
          <a href="https://github.com/ABarpanda/Next-Problem" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://clist.by" target="_blank" rel="noopener noreferrer">clist.by</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
