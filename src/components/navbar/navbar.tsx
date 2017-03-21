
import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';
import { Link, withRouter } from 'react-router-dom';

import connect from '../../utils/connect';

import { IReduxState } from '../../constants/interfaces';
import NavbarItem from './navbar_item';
import NavbarLogo from './navbar_logo';
import NavbarSearch from './navbar_search';

export interface INavbarProps { route?: string; }
export interface INavbarState { searchActive: boolean; }

@connect(mapStateToProps)
class Navbar extends React.Component<INavbarProps, INavbarState> {

  constructor(props: INavbarProps) {
    super(props);
    this.state = {
      searchActive: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  public render() {
    const { route } = this.props;
    const navbarParams = { route, hide: !this.state.searchActive };
    return (
      <nav className="navbar__container">
        <NavbarSearch toggleSearch={this.toggleSearch} active={this.state.searchActive} />
        <div
          id="navbar__items"
          className="navbar__items-secondary"
        >
          <NavbarItem to="/" icon="home" label="home" {...navbarParams} />
          <NavbarItem to="/sandbox" icon="widgets" label="sandbox" {...navbarParams} />
          <NavbarItem to="/portfolio" icon="book" label="portfolio" {...navbarParams} />
          <NavbarItem to="/about" icon="info" label="about" {...navbarParams} />
          <NavbarItem to="/contact" icon="email" label="contact" {...navbarParams} />
        </div>
      </nav>
    );
  }

  private toggleSearch(): void {
    this.setState({ searchActive: !this.state.searchActive });
  }
};


function mapStateToProps(state: IReduxState) {
  const { location } = state.router;
  return {
    route: location ? location.pathname : '/',
  };
}

export default Navbar;
