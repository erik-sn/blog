import * as React from 'react';

interface IProps {
  fill?: string;
}

const Mail = ({ fill }: IProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 512 512">
    <path fill={fill || 'white'} d="M464 64h-416c-26.4 0-48 21.6-48 48v320c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-320c0-26.4-21.6-48-48-48zM199.37 275.186l-135.37 105.446v-250.821l135.37 145.375zM88.19 128h335.62l-167.81 126-167.81-126zM204.644 280.849l51.356 55.151 51.355-55.151 105.277 135.151h-313.264l105.276-135.151zM312.63 275.186l135.37-145.375v250.821l-135.37-105.446z"/>
  </svg>
);

export default Mail;
