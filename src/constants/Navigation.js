import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './routes';

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
      </ul>
    </div>
  );
}
