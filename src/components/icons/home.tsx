import * as React from 'react';

interface IProps {
  fill?: string;
}

const Home = ({ fill }: IProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 512 512">
    <path d="M512 304l-96-96v-144h-64v80l-96-96-256 256v16h64v160h160v-96h64v96h160v-160h64z" fill={fill || 'white'} />
  </svg>
);

export default Home;
