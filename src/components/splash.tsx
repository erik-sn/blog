import * as React from 'react';
import { Link } from 'react-router-dom';


const Splash = (): JSX.Element => (
  <section className="splash__container">
    <div className="splash__item">
      <Link to="/" >Articles</Link>
    </div>
    <div className="splash__item">
      <Link to="/sandbox" >Sandbox</Link>
    </div>
    <div className="splash__item">
      <Link to="/portfolio" >Portfolio</Link>
    </div>
  </section>
);

export default Splash;
