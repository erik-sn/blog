import * as axios from 'axios';
import * as debounce from 'lodash.debounce';
import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';

import { articleSearch, updateSearchInput } from '../../actions/index';
import { IAction, IReduxState } from '../../constants/interfaces';
import { API } from '../../constants/types';
import Article from '../../models/article';
import connect from '../../utils/connect';

interface INavbarSearchInputProps {
  articleSearch?: (searchValue: string) => IAction;
  updateSearchInput?: (searchValue: string) => IAction;
  searchValue?: string;
}

@connect(mapStateToProps, { articleSearch, updateSearchInput })
class NavbarSearchInput extends React.Component<INavbarSearchInputProps, {}> {

  private handleSearch: any;

  constructor(props: INavbarSearchInputProps) {
    super(props);
    this.handleSearch = debounce(props.articleSearch, 250);
    this.handleSearchChange = this.handleSearchChange.bind(this);
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
        value={this.props.searchValue}
        onChange={this.handleSearchChange}
      />
    );
  }

  private handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const searchValue = event.currentTarget.value;
    this.props.updateSearchInput(searchValue);
    this.handleSearch(searchValue);
  }
}

function mapStateToProps(state: IReduxState): {} {
  return {
    searchValue: state.display.searchValue,
  };
}

export default NavbarSearchInput;
