
import * as React from 'react';
import { Link } from 'react-router-dom';

import Article from '../../models/article';

export interface IArticleModalProps {
  visible: boolean;
  closeModal: () => void;
  articles: Article[];
}

const ArticleModal = ({ articles, closeModal, visible }: IArticleModalProps) => {
  if (!visible) {
    return <div />;
  }
  return (
    <div className="article_modal__container" >
      <h3>Articles</h3>
      <div className="article_model__list-container">
        {articles.map((article, i) => (
          <div key={i} className="article_modal__link">
            <Link
              to={`/write/${article.urlTitle}/`}
              onClick={closeModal}
            >
              {article.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="article_modal__button-container">
        <button name="close-modal" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ArticleModal;
