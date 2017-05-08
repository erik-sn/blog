import * as React from 'react';
import { IMatch, Link } from 'react-router-dom';

export interface ISocialSidebarProps {
  match: IMatch;
}

export interface ISocialSidebarState {
  url: string;
}

class SocialSidebar extends React.Component<ISocialSidebarProps, ISocialSidebarState> {

  constructor(props: ISocialSidebarProps) {
    super(props);
    this.state = {
      url: '',
    };
  }

  public render(): JSX.Element {
    const { match } = this.props;
    const { url } = this.state;
    const title = match.params.title;
    return (
      <div className="social_sidebar__container" >
        <div className="social_sidebar__link">
          <a href={`http://twitter.com/share?url=${url}`}>
            <img width="40px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1492220310/rss_gt6ywk.png" />
          </a>
        </div>
        <div className="social_sidebar__link">
          <a href={`http://twitter.com/share?url=${url}`}>
            <img width="40px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1492220322/twitter_wc65n1.png" />
          </a>
        </div>
        <div className="social_sidebar__link">
          <a href={`http://reddit.com/submit?url=${url}`}>
            <img width="40px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1492220307/reddit_f7asx8.png" />
          </a>
        </div>
        <div className="social_sidebar__link">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <img width="40px" src="https://res.cloudinary.com/dvr87tqip/image/upload/v1492220292/facebook_k9j5ge.png" />
          </a>
        </div>
        <div className="social_sidebar__link">
          <a href={`https://plus.google.com/share?url=${url}`}>
            <img
              width="40px"
              src="https://res.cloudinary.com/dvr87tqip/image/upload/v1492220299/googleplus_xmzuzl.png"
            />
          </a>
        </div>
      </div>
    );
  }

  private componentDidMount() {
    const url = encodeURIComponent(window.location.href);
    this.setState({ url });
  }
};

export default SocialSidebar;
