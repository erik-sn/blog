import * as marked from 'marked';
import * as React from 'react';

import Article from '../../models/article';
import ArticleInfo from '../blog/article_info';
import TagList from '../blog/tag_list';

export interface IDisplayBoxProps {
  article: Article;
}

class DisplayBox extends React.Component<IDisplayBoxProps, {}> {

  public render(): JSX.Element {
    const { article } = this.props;
    const html = marked(article ? article.text : '');
    return (
      <div className="display_box__container box_container">
        <h2>{article ? article.title : ''}</h2>
        <TagList article={article} />
        <ArticleInfo article={article} />
        <div id="display_box__text">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    );
  }
}

export default DisplayBox;
