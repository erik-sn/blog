import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';

interface INavbarSearchInputProps {}
interface INavbarSearchInputState {
  searchValue: string;
}


class NavbarSearchInput extends React.Component<INavbarSearchInputProps, INavbarSearchInputState> {

  constructor(props: INavbarSearchInputProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  public render() {
    return (
      <input
        type="text"
        className="navbar__search-input"
        value={this.state.searchValue}
        onChange={this.handleSearchChange}
      />
    );
  }

  private handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({ searchValue: event.currentTarget.value });
  }
}

export default NavbarSearchInput;
