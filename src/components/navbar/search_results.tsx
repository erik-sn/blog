import * as React from 'react';

import { hideSearch } from '../../actions/index';
import { IAction, IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';
import connect from '../../utils/connect';
import NoResults from './no_results';
import PromptAll from './prompt_all';
import QueryTooShort from './query_too_short';
import SearchResult from './search_result';

export interface ISearchResultsProps {
  active: boolean;
  parentStyle: any;
  hideSearch?: () => IAction;
  searchResults?: Article[];
  searchValue?: string;
  toggleSearch: () => void;
}

@connect(mapStateToProps, { hideSearch })
export class SearchResults extends React.Component<ISearchResultsProps, {}> {

  constructor(props: ISearchResultsProps) {
    super(props);
    this.closeSearch = this.closeSearch.bind(this);
  }

  public render(): JSX.Element {
    const { active, parentStyle, searchResults, searchValue, toggleSearch } = this.props;
    if (!active || !searchValue.trim()) {
      return <div />;
    }

    const trimmedResults = searchResults.slice(0, 5);
    return (
      <div
        id="search_results__id"
        className="search_results__container"
        style={{ top: parentStyle.height }}
      >
        {trimmedResults.map((article, i) => (
          <SearchResult key={i} article={article} closeSearch={this.closeSearch} />
        ))}
        {this.renderPrompt()}
      </div>
    );
  }

  private closeSearch(): void {
    const { hideSearch, toggleSearch} = this.props;
    hideSearch();
    toggleSearch();
  }

  private renderPrompt(): JSX.Element {
    const { searchResults, searchValue, toggleSearch } = this.props;
    if (searchResults.length > 5) {
      return <PromptAll toggleSearch={toggleSearch} />;
    } else if (searchValue.trim().length < 4) {
      return <QueryTooShort />;
    } else if (searchResults.length === 0) {
      return <NoResults />;
    }
    return undefined;
  }
}

function mapStateToProps(state: IReduxState) {
  return {
    searchResults: state.data.searchResults,
    searchValue: state.display.searchValue,
  };
}

export default SearchResults;
