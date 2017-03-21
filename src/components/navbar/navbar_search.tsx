import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';

import NavbarSearchInput from './navbar_search_input';

interface INavbarSearchProps {
  toggleSearch: Function;
  active: boolean;
}

const NavbarSearch = (props: INavbarSearchProps): JSX.Element => {
  const toggleSearch = () => props.toggleSearch();
  const stiffness = props.active ? 50 : 126;
  const damping = props.active ? 25 : 25;
  const searchWidth = window.innerWidth < 400 ? window.innerWidth - 75 : 350;
  return (
    <Motion style={{value: spring(props.active ? -1 * searchWidth : 0, presets.stiff)}}>
      {(current: any) =>
      <div
        className="navbar__search"
        style={{
          width: `${-current.value + 50}px`,
        }}
      >
        <Motion style={{value: spring(props.active ? 1 : -1)}}>
          {(flip: any) =>
            <i
              onClick={toggleSearch}
              className="material-icons"
              style={{ transform: `scale(${flip.value}, 1)`}}
            >
              search
            </i>
          }
        </Motion>
        <Motion style={{value: spring(props.active ? 0 : 1)}}>
          {(opacity: any) =>
            <div className="navbar__search-container" >
              {props.active ? <NavbarSearchInput /> : undefined}
              <hr style={{ opacity: 1 - opacity.value}} />
            </div>
          }
        </Motion>
      </div>
      }
    </Motion>
  );
};

export default NavbarSearch;
