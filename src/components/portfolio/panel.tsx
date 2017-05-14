import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as Slider from 'react-slick';

interface IPanelProps {
  title: string;
  github: string;
  link: string;
  description: string;
  images: string[];
  tech: JSX.Element[];
  textLeft?: boolean;
  height?: number;
}

interface IPanelState {
  imgIndex: number;
}

const githubIcon = 'https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/GitHub-Mark-64px_y3e5ic.png';

class Panel extends React.Component<IPanelProps, IPanelState> {

  constructor(props: IPanelProps) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
  }

  public render(): JSX.Element {
    const { title, github, link, description, height,
      tech, images, textLeft } = this.props;
    return (
      <div className="portfolio__panel" >
        <div className="portfolio__title">
          <div><h2>
            {link ? <a href={link}>{title}</a> : title}
          </h2></div>
          <a href={github} >
            <img height="30px" src={githubIcon} alt="github" />
          </a>
        </div>
        <div
          className="portfolio__content"
          style={{
            flexDirection: textLeft ? 'row' : 'row-reverse',
          }}
        >
          <div className="portfolio__panel-text">
            <div className="portfolio__description">
              {description}
            </div>
            <div >
              <h5>Technologies Used:</h5>
              <div className="portfolio__technologies">
              {tech.map((t, i) => <div key={i} className="portfolio__tech">{t}</div>)}
              </div>
            </div>
          </div>
          {images.length > 0
            ? <div className="portfolio__panel-img">
                <div className="portfolio__panel-slider">
                  <img src={images[this.state.imgIndex]} alt="panel image" />
                </div>
              </div>
            : undefined}
        </div>
      </div>
    );
  }

  private componentDidMount(): void {
    const { images } = this.props;
    const maxLength = images.length - 1;
    setInterval(() => {
      const { imgIndex } = this.state;
      if (maxLength === 0) {
        return;
      } else if (imgIndex === maxLength) {
        this.setState({ imgIndex: 0 });
      } else {
        this.setState({ imgIndex: imgIndex + 1 });
      }
    }, 6000);
  }

};

export default Panel;
