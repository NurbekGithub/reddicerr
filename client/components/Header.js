import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-inverse">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Reddice</Link>
    </div>
    <div id="navbar" className="collapse navbar-collapse">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  </nav>
);