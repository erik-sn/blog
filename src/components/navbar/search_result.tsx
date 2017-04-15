import * as React from 'react';
import { Link } from 'react-router-dom';

import Article from '../../models/article';

export interface ISearchResultProps {
  article: Article;
  closeSearch: () => void;
}

const SearchResult = ({ article, closeSearch }: ISearchResultProps) => (
  <div
    className="search_result__container"
    onClick={closeSearch}
  >
    <Link to={`/articles/${article.url_title}/`}>{article.title}</Link>
  </div>
);

export default SearchResult;
