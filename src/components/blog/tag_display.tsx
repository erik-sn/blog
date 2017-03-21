import * as React from 'react';

import Tag from '../../models/tag';

export interface ITagDisplayProps {
  tag: Tag;
}

const TagDisplay = ({ tag }: ITagDisplayProps) => (
  <div className="tag_display__container" >
    #{tag.name}
  </div>
);

export default TagDisplay;

