import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ISocialSidebarProps {
}

const SocialSidebar = ({}: ISocialSidebarProps) => (
  <div className="social_sidebar__container" >
    <div className="social_sidebar__link">
      <a href="https://github.com/erik-sn/">
        <img width="25px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/GitHub-Mark-64px_y3e5ic.png" />
      </a>
    </div>
    <div className="social_sidebar__link">
      <a href="https://twitter.com/en_says/">
        <img width="25px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/mfg-labs-iconset_2014-07-29_twitter_circle_64_0_000000_none_z7urtm.png" />
      </a>
    </div>
    <div className="social_sidebar__link">
      <a href="http://codepen.io/erik-sn/">
        <img width="25px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/codepen_lx96w4.png" />
      </a>
    </div>
    <div className="social_sidebar__link">
      <a href="https://www.freecodecamp.com/erik-sn">
        <img width="25px" src="http://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/fcc_zccdu6.png" />
      </a>
    </div>
  </div>
);

export default SocialSidebar;
