import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Proyecto New World</strong> by{' '}
          <Link to="https://jgthms.com">Fabricio Giribone - © 2023 Copyright </Link>. The
          source code is licensed
          <Link to="http://opensource.org/licenses/mit-license.php"> MIT </Link>. The
          website content is licensed{' '}
          <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</Link>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;