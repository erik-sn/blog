import * as React from 'react';

interface IProps {
  fill?: string;
}

const Write = ({ fill }: IProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 512 512">
    <path fill={fill || 'white'} d="M432 0c44.182 0 80 35.817 80 80 0 18.010-5.955 34.629-16 48l-32 32-112-112 32-32c13.371-10.045 29.989-16 48-16zM32 368l-32 144 144-32 296-296-112-112-296 296zM357.789 181.789l-224 224-27.578-27.578 224-224 27.578 27.578z"/>
  </svg>
);

export default Write;
