import * as React from 'react';

import Article from '../../models/article';

export interface IArticleInfoProps {
  article: Article;
}

const monthNames: string[] = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December',
];

const ArticleInfo = ({ article }: IArticleInfoProps) => {
  if (!article || !article.date) {
    return <div className="article_description__info-container" />;
  }
  const day = article.date.getDate();
  const monthIndex = article.date.getMonth();
  const year = article.date.getFullYear();

  return (
    <div className="article_description__info-container">
      <span className="article_description__date">
        {`${monthNames[monthIndex]} ${day}, ${year}`}
      </span>
      <span className="article_description__separator">
      -
      </span>
      <span className="article_description__timetoread">{article.timeToRead} min read</span>
    </div>
  );
};

export default ArticleInfo;
