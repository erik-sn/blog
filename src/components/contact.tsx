import * as React from 'react';


const Contact = (): JSX.Element => (
  <section className="contact__container">
    <div className="contact__social-media">
      <div className="social_sidebar__link">
        <a href="https://github.com/erik-sn/">
          <img width="45px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/GitHub-Mark-64px_y3e5ic.png" />
        </a>
      </div>
      <div className="social_sidebar__link">
        <a href="https://www.freecodecamp.com/erik-sn">
          <img width="45px" src="http://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/fcc_zccdu6.png" />
        </a>
      </div>
      <div className="social_sidebar__link">
        <a href="https://twitter.com/en_says/">
          <img width="45px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/mfg-labs-iconset_2014-07-29_twitter_circle_64_0_000000_none_z7urtm.png" />
        </a>
      </div>
      <div className="social_sidebar__link">
        <a href=" https://www.reddit.com/user/erik_says/">
          <img width="45px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490110395/reddit_uhpuv2.svg" />
        </a>
      </div>
      <div className="social_sidebar__link">
        <a href="http://codepen.io/erik-sn/">
          <img width="45px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/codepen_lx96w4.png" />
        </a>
      </div>
    </div>
    <div className="contact__lower-container">
      You can contact me at any of the links above or email me at:
    </div>
    <div className="contact__email"><h3>nieh.erik@gmail.com</h3></div>
  </section>
);

export default Contact;
