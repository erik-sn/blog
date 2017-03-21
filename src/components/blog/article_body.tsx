import * as React from 'react';

import connect from '../../utils/connect';

import { IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';
import ArticleInfo from './article_info';

export interface IArticleBodyProps {
  activeArticle: Article;
}

const ArticleBody = ({ activeArticle }: IArticleBodyProps) => {
  if (!activeArticle) {
    return <div>Loading...</div>;
  }
  return (
    <section className="article_body__container" >
      <h2>{activeArticle.title}</h2>
      <ArticleInfo article={activeArticle} />
      {activeArticle.text}
    </section>
  );
};

function mapStateToProps(state: IReduxState, ownProps: any): {} {
  const inputUrlTitle = ownProps.match.params.title;
  const activeArticle = state.data.articles.find((a) => a.urlTitle === inputUrlTitle);
  return { activeArticle };
}

export default connect(mapStateToProps)(ArticleBody);
