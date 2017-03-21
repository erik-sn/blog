import { HOME_URL } from '../../constants/types';
import Article from '../../models/article';
import ArticleBody from './article_body';
import ArticleInfo from './article_info';
import TagDisplay from './tag_display';

import * as React from 'react';
import { Link } from 'react-router-dom';


export interface IArticleProps {
  article: Article;
}

const ArticleDescription = ({ article }: IArticleProps) => (
  <div className="article__container" >
    <Link to={`/articles/${article.urlTitle}/`} >
      <div className="article__inner-container">
        <h2>{article.title}</h2>
        <ArticleInfo article={article} />
        <div className="article_description__description">{article.description}</div>
      </div>
    </Link>
    <div className="article_description__tags">
      <i className="material-icons">local_offer</i>
      {article.tags.map((tag) => <TagDisplay tag={tag} />)}
    </div>
  </div>
);

export default ArticleDescription;
