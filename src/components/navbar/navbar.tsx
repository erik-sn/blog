
import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';
import { Link, withRouter } from 'react-router-dom';

import connect from '../../utils/connect';

import { IReduxState } from '../../constants/interfaces';
import User from '../../models/user';
import Login from './login';
import NavbarItem from './navbar_item';
import NavbarLogo from './navbar_logo';
import NavbarSearch from './navbar_search';

export interface INavbarProps {
  route?: string;
  user?: User;
}

export interface INavbarState {
  minimize: boolean;
  searchActive: boolean;
}

@connect(mapStateToProps)
class Navbar extends React.Component<INavbarProps, INavbarState> {

  public minimizeStyle: any = {
    height: '40px',
    opacity: '0.7',
  };

  public standardStyle: any = {
    height: '60px',
    opacity: '0.85',
  };

  constructor(props: INavbarProps) {
    super(props);
    this.state = {
      minimize: false,
      searchActive: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  public componentDidMount(): void {
    const container = document.getElementById('application__child-container');
    container.addEventListener('scroll', () => {
      const minimize = this.state.minimize;
      const scroll = container.scrollTop;
      if (container.scrollTop > 40 && !minimize) {
        this.setState({ minimize: true });
      } else if (container.scrollTop <= 40 && minimize) {
        this.setState({ minimize: false });
      }
    });
  }

  public render() {
    const { minimize, searchActive } = this.state;
    const { route, user } = this.props;
    const navbarParams = { route, minimize, hide: !searchActive };
    return (
      <nav className="navbar__container" style={minimize ? this.minimizeStyle : this.standardStyle} >
        <NavbarSearch toggleSearch={this.toggleSearch} active={this.state.searchActive} />
        <div
          id="navbar__items"
          className="navbar__items-secondary"
        >
          <NavbarItem to="/" icon="home" label="home" {...navbarParams} />
          {user && user.isStaff ? <NavbarItem to="/write" icon="palette" label="Write" {...navbarParams} /> : undefined}
          <NavbarItem to="/sandbox" icon="widgets" label="sandbox" {...navbarParams} />
          <NavbarItem to="/about" icon="info" label="about" {...navbarParams} />
          <NavbarItem to="/contact" icon="email" label="contact" {...navbarParams} />
          <div className="navbar__item">
            <Login minimize={minimize} />
          </div>
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
    user: state.auth.user,
  };
}

export default Navbar;

// <NavbarItem to="/portfolio" icon="book" label="portfolio" {...navbarParams} />
