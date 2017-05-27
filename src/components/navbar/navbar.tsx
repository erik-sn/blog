import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';
import { Link, withRouter } from 'react-router-dom';

import connect from '../../utils/connect';

import { hideSearch, showSearch, updateSearchInput } from '../../actions/index';
import { IAction, IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';
import User from '../../models/user';
import Drawer from '../icons/drawer';
import Home from '../icons/home';
import Mail from '../icons/mail';
import Profile from '../icons/user';
import Write from '../icons/write';
import Login from './login';
import NavbarItem from './navbar_item';
import NavbarSearch from './navbar_search';
import SearchResults from './search_results';

export interface INavbarProps {
  route?: string;
  searchActive?: boolean;
  user?: User;
  hideSearch?: () => IAction;
  showSearch?: () => IAction;
  updateSearchInput?: (searchValue: string) => IAction;
}

export interface INavbarState {
  minimize: boolean;
}

@connect(mapStateToProps, { hideSearch, showSearch, updateSearchInput })
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
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  public render(): JSX.Element {
    const { minimize } = this.state;
    const { route, user, searchActive } = this.props;
    const navbarParams = { route, minimize, hide: !searchActive };
    return (
      <nav className="navbar__container" style={minimize ? this.minimizeStyle : this.standardStyle} >
        <NavbarSearch toggleSearch={this.toggleSearch} active={searchActive} />
        <div
          id="navbar__items"
          className="navbar__items-secondary"
        >
          <NavbarItem to="/" icon={<Home />} label="home" {...navbarParams} />
          {user && user.isStaff
            ? <NavbarItem to="/write" icon={<Write />} label="Write" {...navbarParams} />
            : undefined}
          <NavbarItem to="/portfolio" icon={<Drawer />} label="portfolio" {...navbarParams} />
          <NavbarItem to="/about" icon={<Profile />} label="about" {...navbarParams} />
          <NavbarItem to="/contact" icon={<Mail />} label="contact" {...navbarParams} />
          <div className="navbar__item">
            <Login minimize={minimize} />
          </div>
        </div>
        <SearchResults
          parentStyle={minimize ? this.minimizeStyle : this.standardStyle}
          active={searchActive}
          toggleSearch={this.toggleSearch}
        />
      </nav>
    );
  }

  private componentDidMount(): void {
    window.addEventListener('scroll', () => {
      const minimize = this.state.minimize;
      if (window.scrollY > 40 && !minimize) {
        this.setState({ minimize: true });
      } else if (window.scrollY <= 40 && minimize) {
        this.setState({ minimize: false });
      }
    });
  }

  private toggleSearch(): void {
    const { searchActive, hideSearch, showSearch,
      updateSearchInput } = this.props;
    if (searchActive) {
      hideSearch();
      updateSearchInput('');
    } else {
      showSearch();
    }
  }
}

function mapStateToProps(state: IReduxState) {
  const { location } = state.router;
  return {
    route: location ? location.pathname : '/',
    searchActive: state.display.searchActive,
    user: state.auth.user,
  };
}

export default Navbar;
