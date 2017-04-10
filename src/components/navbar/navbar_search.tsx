import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';

import NavbarSearchInput from './navbar_search_input';

interface INavbarSearchProps {
  toggleSearch: () => void;
  active: boolean;
}

interface INavbarSearchState {
  searchWidth: number;
}

class NavbarSearch extends React.Component<INavbarSearchProps, INavbarSearchState> {

  constructor(props: INavbarSearchProps) {
    super(props);
    this.state = {
      searchWidth: 350,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  public componentDidMount() {
    const searchWidth = window.innerWidth < 400 ? window.innerWidth - 75 : 350;
    this.setState({ searchWidth });
  }

  public toggleSearch(): void {
    this.props.toggleSearch();
  }

  public render(): JSX.Element {
    const { active } = this.props;
    const { searchWidth } = this.state;
    const stiffness = active ? 50 : 126;
    const damping = active ? 25 : 25;
    return (
      <Motion style={{value: spring(active ? -1 * searchWidth : 0, presets.stiff)}}>
        {(current: any) =>
        <div
          className="navbar__search"
          style={{
            width: `${-current.value + 50}px`,
          }}
        >
          <Motion style={{value: spring(active ? 1 : -1)}}>
            {(flip: any) =>
              <i
                onClick={this.toggleSearch}
                className="material-icons"
                style={{ transform: `scale(${flip.value}, 1)`}}
              >
                search
              </i>
            }
          </Motion>
          <Motion style={{value: spring(active ? 0 : 1)}}>
            {(opacity: any) =>
              <div className="navbar__search-container" >
                {active ? <NavbarSearchInput /> : undefined}
                <hr style={{ opacity: 1 - opacity.value}} />
              </div>
            }
          </Motion>
        </div>
        }
      </Motion>
    );
  }
};

export default NavbarSearch;
