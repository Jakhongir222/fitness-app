import React from 'react';
import { Link } from 'react-router-dom';

export const Weekdays = () => {

  return (
    <div>
       <nav>
        <Link to="monday">Monday</Link>
      </nav>
      <nav>
        <Link to="tuesday">Tuesday</Link>
      </nav>
      <nav>
        <Link to="wednesday">Wednesday</Link>
      </nav>
      <nav>
        <Link to="thursday">Thursday</Link>
      </nav>
      <nav>
        <Link to="friday">Friday</Link>
      </nav>
      <nav>
        <Link to="saturday">Saturday</Link>
      </nav>
      <nav>
        <Link to="sunday">Sunday</Link>
      </nav>
    </div>
  );
};
