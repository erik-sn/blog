import * as React from 'react';

import Article from '../../models/article';

export interface IEditBoxProps {
  article: Article;
  change: (event: React.FormEvent<any>) => void;
}

const EditBox = ({ change, article }: IEditBoxProps) => (
  <div id="edit_box__container" className="box_container">
    <input name="title" onChange={change} value={article.title} />
    <input name="description" onChange={change} value={article.description} />
    <textarea
      id="edit_box__text"
      name="text"
      value={article.text}
      onChange={change}
    />
  </div>
);

export default EditBox;

