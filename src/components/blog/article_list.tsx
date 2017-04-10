import * as React from 'react';

import connect from '../../utils/connect';

import { IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';
import ArticleDescription from './article_description';

export interface IArticleListProps {
  articles?: Article[];
  activeArticle?: Article;
}

const ArticleList = ({ activeArticle, articles }: IArticleListProps): JSX.Element => (
  <section className="article_list__container">
    {articles.map((article, i) => <ArticleDescription key={i} article={article} />)}
  </section>
);

function mapStateToProps(state: IReduxState, ownProps: any): {} {
  const { articles } = state.data;
  const inputUrlTitle = ownProps.match.params.title;
  const activeArticle = articles.find((a) => a.url_title === inputUrlTitle);
  return { articles };
}

const ArticleListContainer = connect(mapStateToProps)(ArticleList);

export default ArticleListContainer;
