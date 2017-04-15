import * as React from 'react';
import { Link } from 'react-router-dom';

import { IReduxState } from '../constants/interfaces';
import Article from '../models/article';
import connect from '../utils/connect';

export interface IDisplaySearchResultsProps {
  searchResults?: Article[];
}

const DisplaySearchResults = ({ searchResults }: IDisplaySearchResultsProps) => (
  <section className="display_search_results__container" >
    {searchResults.map((article, i) => (
      <div className="display_search_results__result">
        <Link to={`/articles/${article.url_title}/`}>{article.title}</Link>
      </div>
    ))}
  </section>
);

function mapStateToProps(state: IReduxState) {
  return {
    searchResults: state.data.searchResults,
  };
}

export default connect(mapStateToProps)(DisplaySearchResults);

