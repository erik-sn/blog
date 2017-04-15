import * as React from 'react';

interface IProps {
  fill?: string;
}

const Drawer = ({ fill }: IProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20px" height="20px" viewBox="0 0 512 512">
    <path fill={fill || 'white'} d="M508.494 326.005l-128-160c-3.037-3.796-7.633-6.005-12.494-6.005h-224c-4.86 0-9.458 2.209-12.494 6.005l-128 160c-2.269 2.837-3.506 6.362-3.506 9.995v144c0 17.673 14.327 32 32 32h448c17.674 0 32-14.327 32-32v-144c0-3.633-1.236-7.158-3.506-9.995zM480 352h-112l-64 64h-96l-64-64h-112v-10.388l119.69-149.612h208.62l119.69 149.612v10.388z"/>
  </svg>
);

export default Drawer;
