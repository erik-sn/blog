import * as React from 'react';
import { Link } from 'react-router-dom';

import Article from '../../models/article';

export interface ISearchResultProps {
  article: Article;
  closeSearch: () => void;
}

const SearchResult = ({ article, closeSearch }: ISearchResultProps) => (
  <Link to={`/articles/${article.url_title}/`}>
    <div
      className="search_result__container"
      onClick={closeSearch}
    >
      {article.title}
    </div>
  </Link>
);

export default SearchResult;
