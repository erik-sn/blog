import * as React from 'react';

import { articleSearch, showSearch, updateSearchInput } from '../../actions/index';
import { IAction } from '../../constants/interfaces';
import Tag from '../../models/tag';
import connect from '../../utils/connect';

export interface ITagDisplayProps {
  tag: Tag;
  showSearch?: () => IAction;
  updateSearchInput?: (searchValue: string) => IAction;
  articleSearch?: (searchValue: string) => IAction;
}

const TagDisplay = ({ articleSearch, tag,
  showSearch, updateSearchInput }: ITagDisplayProps) => {
  const handleClick = () => {
    updateSearchInput(tag.name);
    articleSearch(tag.name);
    showSearch();
  };
  return (
    <div
      className="tag_display__container"
      onClick={handleClick}
    >
      #{tag.name}
    </div>
  );
};

export default connect(null, {
  articleSearch, showSearch, updateSearchInput,
})(TagDisplay);
