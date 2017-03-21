import * as React from 'react';

import Article from '../../models/article';

export interface IArticleInfoProps {
  article: Article;
}

const ArticleInfo = ({ article }: IArticleInfoProps) => {
  if (!article || !article.date) {
    return <div className="article_description__info-container" />;
  }
  return (
    <div className="article_description__info-container">
      <span className="article_description__date">{article.date.format('MMMM Do, YYYY')}</span>
      <span className="article_description__separator">
        <i className="material-icons">details</i>
      </span>
      <span className="article_description__timetoread">{article.timeToRead} min read</span>
    </div>
  );
}

export default ArticleInfo;
