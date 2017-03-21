
import * as React from 'react';
import { connect } from 'react-redux';

import { IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';

export interface IArticleDisplayProps {
  article: Article;
}

const ArticleDisplay = ({ article }: IArticleDisplayProps) => {
  if (!article) {
    return <div>Loading</div>;
  }
  return (
    <div className="article__container" >
      <h3>{article.title}</h3>
    </div>
  );
};

function mapStateToProps(state: IReduxState, ownProps: any): {} {
  const { articles } = state.data;
  const inputUrlTitle = ownProps.match.params.title;
  const article = articles.find((a) => a.urlTitle === inputUrlTitle);
  return { article };
}

export default connect(mapStateToProps)(ArticleDisplay);
