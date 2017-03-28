import * as React from 'react';
import { Motion, presets, spring } from 'react-motion';
import { Link } from 'react-router-dom';

export interface INavbarItemProps {
  to: string;
  icon: string;
  label: string;
  route?: string;
  hide?: boolean;
  minimize?: boolean;
}

function renderLabel(label: string, width: any): JSX.Element {
  return (
    <span className="navbar__label" style={{ width: `${(label.length + 2) * width}px` }} >{label}</span>
  );
}

const Navbar = (props: INavbarItemProps): JSX.Element => {
  const itemClass = `navbar__item ${!props.hide ? 'navbar__item-hide' : ''}`;
  const underClass = `navbar__under ${props.route === props.to ? 'navbar__under-active' : ''}`;
  return (
    <Link to={props.to} >
      <div className={itemClass} >
        <i className="material-icons">{props.icon}</i>
        <Motion style={{value: spring(props.hide ? 8.5 : 0, presets.stiff)}}>
          {(width: any) => renderLabel(props.label, width.value)}
        </Motion>
      </div>
      <div className={underClass} style={{ marginTop: props.minimize ? '2px' : '0px' }} />
    </Link>
  );
};

export default Navbar;
