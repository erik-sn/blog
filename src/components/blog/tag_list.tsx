import * as React from 'react';

import Article from '../../models/article';
import TagIcon from '../icons/tag';
import TagDisplay from './tag_display';

interface ITagListProps {
  article: Article;
}

const TagList = ({ article }: ITagListProps) => (
  <div className="article_description__tags">
    {article.tags.length > 0 ? <TagIcon fill="black" /> : undefined}
    {article.tags.map((tag, i) => <TagDisplay key={i} tag={tag} />)}
  </div>
);

export default TagList;
