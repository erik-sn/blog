import * as React from 'react';
import { Link } from 'react-router-dom';

import { IReduxState } from '../constants/interfaces';
import Article from '../models/article';
import connect from '../utils/connect';
import ArticleDescription from './blog/article_description';

export interface IDisplaySearchResultsProps {
  searchResults?: Article[];
  searchValue?: string;
}

const DisplaySearchResults = ({ searchResults, searchValue }: IDisplaySearchResultsProps) => (
  <section className="display_search_results__container" >
    {searchValue.trim() ? <h3>Searching For: '{searchValue}'</h3> : undefined}
    {searchResults.map((article, i) => <ArticleDescription article={article} />)}
  </section>
);

function mapStateToProps(state: IReduxState) {
  return {
    searchResults: state.data.searchResults,
    searchValue: state.display.searchValue,
  };
}

export default connect(mapStateToProps)(DisplaySearchResults);
