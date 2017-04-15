import * as axios from 'axios';
import { debounce } from 'lodash';
import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';

import { articleSearch } from '../../actions/index';
import { IAction, IReduxState } from '../../constants/interfaces';
import { API } from '../../constants/types';
import Article from '../../models/article';
import connect from '../../utils/connect';

interface INavbarSearchInputProps {
  articleSearch?: (searchValue: string) => IAction;
}

interface INavbarSearchInputState {
  searchValue: string;
}

@connect(null, { articleSearch })
class NavbarSearchInput extends React.Component<INavbarSearchInputProps, INavbarSearchInputState> {

  private handleSearch: any;

  constructor(props: INavbarSearchInputProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = debounce(props.articleSearch, 250);
  }

  public componentDidMount() {
    // set the cursor in the input field when it renders
    const searchField = document.getElementById('navbar__search-input');
    if (searchField) {
      searchField.focus();
    }
  }

  public render() {
    return (
      <input
        type="text"
        id="navbar__search-input"
        className="navbar__search-input"
        value={this.state.searchValue}
        onChange={this.handleSearchChange}
      />
    );
  }

  private resetSearchValue(): void {
    this.setState({ searchValue: '' }, () => this.handleSearch(''));
  }

  private handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const searchValue = event.currentTarget.value;
    this.setState({ searchValue }, () => {
      this.handleSearch(searchValue);
    });
  }
}

export default NavbarSearchInput;
