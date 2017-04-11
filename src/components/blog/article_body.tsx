import * as marked from 'marked';
import * as React from 'react';

import connect from '../../utils/connect';

import { IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';
import ArticleInfo from './article_info';
import TagList from './tag_list';

export interface IArticleBodyProps {
  activeArticle: Article;
}

const ArticleBody = (props: IArticleBodyProps) => {
  const { activeArticle } = props;
  if (!activeArticle) {
    return <div>Loading...</div>;
  }
  return (
    <section className="article_body__container" >
      <h2>{activeArticle.title}</h2>
      <TagList article={activeArticle} />
      <ArticleInfo article={activeArticle} />
      <div id="article_body__text">
        <div dangerouslySetInnerHTML={{ __html: marked(activeArticle ? activeArticle.text : '') }} />
      </div>
    </section>
  );
};

function mapStateToProps(state: IReduxState, ownProps: any): {} {
  const inputUrlTitle = ownProps.match.params.title;
  const activeArticle = state.data.articles.find((a) => a.url_title === inputUrlTitle);
  return { activeArticle };
}

export default connect(mapStateToProps)(ArticleBody);
