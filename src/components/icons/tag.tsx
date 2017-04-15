import * as React from 'react';

interface IProps {
  fill?: string;
  size?: string;
}

const Tag = ({ fill, size }: IProps) => (
  <svg width={size || '20'} height={size || '20'} viewBox="0 0 512 512">
    <path fill={fill || 'white'} d="M96 0v512l160-160 160 160v-512z"/>
  </svg>
);

export default Tag;
