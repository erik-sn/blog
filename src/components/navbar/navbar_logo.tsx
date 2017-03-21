import * as React from 'react';

import NavbarGearOne from './navbar_gear1';
import NavbarGearTwo from './navbar_gear2';
import NavbarGearThree from './navbar_gear3';
import NavbarGearFour from './navbar_gear4';

const Logo = () => (
  <div id="navbar__logo">
    <div id="navbar__gear-one">
      <NavbarGearOne />
    </div>
    <div id="navbar__gear-two">
      <NavbarGearTwo />
    </div>
    <div id="navbar__gear-three">
      <NavbarGearThree />
    </div>
    <div id="navbar__gear-four">
      <NavbarGearFour />
    </div>
  </div>
);

export default Logo;

